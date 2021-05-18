const inquirer = require('inquirer');
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: 'root',
  
    // Your password
    password: 'P@rker1928',
    database: 'empTrackerDB',
    });

    connection.connect((err) => {
        if (err) throw err;
        runTracker();
    });

const runTracker = () => {
inquirer 
    .prompt ([
        { 
        type:"list",
        name: "addQuest",
        message: "Please select one of the following choices:",
        choices:["departments", "roles", "employee", "exit"]
        }
])

.then((answer) => {
    switch (answer.action) {
      case 'departments':
        departmentTracker();
        break;

      case 'roles':
        rolesTracker();
        break;

      case 'employee"':
        employeeTracker();
        break;

      case 'Exit':
        connection.end();
        break;

      default:
        console.log(`Invalid action: ${answer.action}`);
        break;
    }
  });
};

const departmentTracker= () => {
    inquirer
      .prompt({
        name: 'deptName',
        type: 'input',
        message: 'What is the name of the Department?',
      })
      .then((answer) => {
        const query = 'SELECT name FROM empTrackerDB WHERE ?';
        connection.query(query, { deptName: answer.deptName }, (err, res) => {
          if (err) throw err;
          res.forEach(({ deptName }) => {
            console.log(
              `name ${deptName}`
            );
          });
          runSearch();
        });
      });
  };
