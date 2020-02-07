const Employee = require('./Employee');

module.exports = class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this._github = github;
    }

    getGithub() {
        return this._github;
    }

    easy() {
        return `
        <div class="col-md-4">
     <div class="employee-card">
            <div class="card-header">
                <h3>${this._name}</h3>
                <h3><i class="fas fa-glasses"></i> Engineer</h3>
            </div>
                <div class="card-content">
                    <ul>
                        <li><strong>ID:</strong> ${this._id}</li>
                        <li><strong>Email:</strong> ${this._email}</li>
                        <li><strong>GitHub:</strong> ${this._github}</li>
                    </ul>
             </div>
        </div>
    </div>
        `;
    }

}
