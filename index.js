const inquirer = require('inquirer');
const mysql = require('mysql');
const consoleTable = require('console.table');
const connection = mysql.createConnection({
    host: 'localhost',
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: 'root',
  
    // Your password
    password: 'password',
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
    switch (answer.addQuest) {
      case 'departments':
        departmentTracker();
        break;

      case 'roles':
        rolesTracker();
        break;

      case 'employee"':
        employeeTracker();
        break;

      case 'exit':
        connection.end();
        break;

      default:
        console.log(`Invalid action: ${answer.addQuest}`);
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
        const query = 'SELECT name FROM department WHERE ?';
        connection.query(query, { name: answer.deptName }, (err, res) => {
          if (err) throw err;
          res.forEach(({ deptName }) => {
            console.log(
              `name ${deptName}`
            );
          });
          runTracker();
        });
      });
  };


  //do database call - this will return what needs to be passed into console.table ... look at npm examples


  // in the schema.sql... ned to make sure that all the foreign keys reference the tables they need to be referencing...
  //foreign key restraints... 
  // Join manager id with employee table..