const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const util = require('util');

const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

const writeFileAsync = util.promisify(fs.writeFile);

class Main {
    constructor() {
        this._teamArray = [];
    }

    async _easy() {
        let teamHTMLString = '';
        for (const teamMember of this._teamArray) {
            teamHTMLString += teamMember.easy();
        }

        const result = Main._templateStart + teamHTMLString + Main._templateEnd;
        console.log(Main._templateStart + teamHTMLString + Main._templateEnd);

        await writeFileAsync(path.resolve(__dirname, '..', 'output', 'output.html'), result);
    }

    async run() {
        const { numberOfMembers } = await inquirer.prompt([{
            type: 'input',
            name: 'numberOfMembers',
            message: 'How Many Members on Your Team?',
            default: 2,
        }])

        for (let i = 0; i < numberOfMembers; i++) {
            console.log('=======================================');
            const response = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Please Enter Your Name',
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Please Enter Your Email',
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Please Enter an ID number',
                },
                {
                    type: 'list',
                    name: 'role',
                    message: 'Please Select Your Role', 
                    choices: [
                        'Engineer',
                        'Intern',
                        'Manager'
                    ]
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'Please Enter Your GitHub Username',
                    when: ({ role }) => role === 'Engineer'
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'Please Enter Name of Your School',
                    when: ({ role }) => role === 'Intern'
                },
                {
                    type: 'input',
                    name: 'roomNumber',
                    message: 'Please Input Your Room Number',
                    when: ({ role }) => role === 'Manager'
                },
            ]);

            const {
                name,
                email,
                id,
                role,
                github,
                school,
                roomNumber,
            } = response;

            if (role === 'Engineer') {
                this._teamArray.push(new Engineer(name, id, email, github));
            }

            if (role === 'Intern') {
                this._teamArray.push(new Intern(name, id, email, school));
            }

            if (role === 'Manager') {
                this._teamArray.push(new Manager(name, id, email, roomNumber));
            }
        }

        await this._easy();
        console.log(this._teamArray);
    }
}

Main._ENGINEER = 'engineer';
Main._INTERN = 'intern';
Main._MANAGER = 'manager';

Main._templateStart = `
<!DOCTYPE html>
<html lang="en-us">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="X-UA-Compatible" content="ie=edge" />
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
<title>Our Project Team</title>
    <style>
        body {
            background-image: url(../img/background.jpg);
            background-size: cover;
            background-attachment: fixed;
            background-repeat: no-repeat;
        }
        .page-top {
            background-color: red;
            color: #fff;
            text-align: center;
            padding: 2em;
            width: 100%;
            margin-bottom: 4em;
        }
        .page-top h1 {text-align: center;}
        .employee-card {
            min-height: 300px;
            margin-bottom: 40px;
            border-radius: 10px;
            background-color: #eeeeee;
            padding: 0;
            -webkit-box-shadow: 10px 10px 19px -6px rgba(0,0,0,0.75);
            -moz-box-shadow: 10px 10px 19px -6px rgba(0,0,0,0.75);
            box-shadow: 10px 10px 19px -6px rgba(0,0,0,0.75);
        }
        .card-header {
            width: 100%;
            background-color: blue;
            color: #fff;
        }
        .card-content {
            margin: 2em;
            background-color: #fff;
        }
        .card-content ul {
            list-style-type: none;
            margin-left: 0;
            width: 100%;
            padding-left: 0;
        }
        .card-content ul li {
            border: 1px solid;
            margin: 0;
            padding: .5em;
        }
        img.avatar {
            max-width: 40px;
            max-height: 40px;
            color: #fff;
            float: left;
            margin-right: 10px;
        }
        
    </style>
</head> 
<body>
    <div class="page-top">
        <h1>Our Team</h1>
    </div>
    <div class="wrapper">
        <div class="container">
            <div class="row">
    `;

    Main._templateEnd = `
                
            </div>
        </div>
    </div>

</body>
</html>
`
module.exports = Main;