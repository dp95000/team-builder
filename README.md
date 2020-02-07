# Employee Team Builder
Employee Team Builder application allows you to build a roster of your web/software development team quickly and export that roster for future reference.  This application is built using HTML, CSS, and Node JS (ES6).


# How to Use This Application
To run this application, open a new GitBash or terminal window, navigate to the root directory of this application, and type the following command... node index.js

This will initialize the application, at which point the user will be prompted to input various bits of information into the command line.  The user will first be prompted to enter the number of members their team will have. Each member will be asked to enter their name, email address, a unique ID number, and to select a user role.  There are three types of roles: 

- Managers
- Engineers
- Interns.  

Users will then be prompted to input additional information, depending on which role they choose.  If the user selects 'Manager', he/she will be prompted to enter an office number.  If the user selects 'Engineer', he/she will be asked to provide their Github username.  If the user selects 'Intern' he/she will be asked to enter the name of their school.

Once all the needed informatinon has been collected, an HTML file will be generated using the information that was provided.  The final result will be a page with organized cards displayed for each team member.


# Application Testing Instructions
To run function tests, open a new GitBash or terminal window, navigate to the root directory of this application, and type the following command... npm test.


# Required Packages Needed
The following packages must be downloaded in order for this application to run...

* Inquirer
* Jest (for testing purposes)

To insure that all needed packages are installed, please enter the following command in your GitBash or Terminal window before running this application... npm install.

