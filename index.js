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
//Need to use consoleTable to add the tables here

    //First Question
const runTracker = () => {
inquirer 
    .prompt ([
        { 
        type:"list",
        name: "addQuest",
        message: "Please select one of the following choices:",
        choices:[
          "Add a Department, Role or Employee?",
          "View a Department, Role or Employee", 
          "Update a Department, Role or Employee?", 
          "Exit"]
        }
])

.then((answer) => {
    switch (answer.addQuest) {
      case 'Add a Department, Role or Employee?':
        addTracker();
        break;

      case 'View a Department, Role or Employee':
        viewTracker();
        break;

      case 'Update a Department, Role or Employee?':
        updateTracker();
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
//Options for Adding something
const addTracker= () => {
  console.log('')
    inquirer
      .prompt({
        name: 'deptName',
        type: 'list',
        message: 'What would you like to add?',
        choices:["Department", "Role", "Employee", "Exit"]
      })
      .then((answer) => {
        switch (answer.addQuest) {
          case 'Department':
            addDepartment();
            break;
            
          case 'Role"':
            addRole();
            break;
    
          case 'Employee"':
            addEmployee();
            break;
    
          case 'Exit':
            connection.end();
            break;
    
          default:
            console.log(`Invalid action: ${answer.addQuest}`);
            break;
        }



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


  // const addDepartment = () => {
  // console.log('Adding new Department...\n');
  // const query = connection.query(
  //   'INSERT INTO department SET ?',
  //   {
  //     name: '$(answer.',
  //   },
  //   (err, res) => {
  //     if (err) throw err;
  //     console.log(`${res.affectedRows} product inserted!\n`);
  //     // Call updateProduct AFTER the INSERT completes
  //     updateProduct();
  //   }
  // );

  //do database call - this will return what needs to be passed into console.table ... look at npm examples


  // in the schema.sql... ned to make sure that all the foreign keys reference the tables they need to be referencing...
  //foreign key restraints... 
  // Join manager id with employee table..