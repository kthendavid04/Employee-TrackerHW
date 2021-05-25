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
        name: 'addSomething',
        type: 'list',
        message: 'What would you like to add?',
        choices:["Department", "Role", "Employee", "Exit"]
      })
      .then((answer) => {
        switch (answer.addSomething) {
          case 'Department':
            addDepartment();
            break;

          case 'Role':
            addRole();
            break;
    
          case 'Employee':
            addEmployee();
            break;
    
          case 'Exit':
            connection.end();
            break;
    
          default:
            console.log(`Invalid action: ${answer.addSomething}`);
            break;
        }



        // const query = 'SELECT name FROM department WHERE ?';
        // connection.query(query, { name: answer.deptName }, (err, res) => {
        //   if (err) throw err;
        //   res.forEach(({ deptName }) => {
        //     console.log(
        //       `name ${deptName}`
        //     );
        //   });
        //   runTracker();
        // });
      });
  };

// ********** CREATE *********** / NEED TO ADD CATCHES... 

// add new Department
 const addDepartment = () => {
    inquirer
      .prompt({
        name: 'newDept',
        type: 'input',
        message: 'What department do you want to add?',
      })
      .then((answer) => {
  console.log('Adding new Department...\n');
  const query = connection.query(
    'INSERT INTO department SET ?',
    {
      name: $(answer.newDpet),
    },
    (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} Department added!\n`);
    }
  )})
  //console.log(query.sql);
};

// Add new Role
  const addRole = () => {
    inquirer
      .prompt({
        name: 'newRole',
        type: 'input',
        message: 'What is the title of the new Role would you like to add?',

        name: 'nRoleSalary',
        type: 'input',
        message: 'What is the annual salary of the New Role?',

        name: 'nRoleDeptID',
        type: 'input',
        message: 'What is the ID of the Deparment for the New Role?',
      })
      .then((answer) => {
  console.log('Adding new Role...\n');
  const query = connection.query(
    'INSERT INTO role SET ?',
    {
      title: $(answer.neRole),
      salary: $(answer.nRoleSalary),
      department_id: $(answer.nRoleDeptID),
    },
    (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} New Role added!\n`);
    }
  )})};

// Add new Employee
  const addEmployee = () => {
    inquirer
      .prompt({
        name: 'nEmpFirstName',
        type: 'input',
        message: 'What is the new employees first name',

        name: 'nEmpLastName',
        type: 'input',
        message: 'What is the new employees last name?',

        name: 'nEmpRoleID',
        type: 'input',
        message: 'What is the ID of the Role/Title for the New Employee?',

        name: 'nEmpManID',
        type: 'input',
        message: 'What is the ID of the new Employees Manager?',
      })
      .then((answer) => {
  console.log('Adding new Employee...\n');
  const query = connection.query(
    'INSERT INTO employee SET ?',
    {
      first_name: $(answer.nEmpFirstName),
      last_name: $(answer.nEmpLastName),
      role_id: $(answer.nEmpRoleID),
      manager_id: $(answer.nEmpManID),
    },
    (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} New Employee added!\n`);
    }
  )})};

  //do database call - this will return what needs to be passed into console.table ... look at npm examples


  // in the schema.sql... ned to make sure that all the foreign keys reference the tables they need to be referencing...
  //foreign key restraints... 
  // Join manager id with employee table..


  // **********READ********************
const viewTracker= () => {
  console.log('')
    inquirer
      .prompt({
        name: 'viewSomething',
        type: 'list',
        message: 'What would you like to view?',
        choices:["Department", "Role", "Employee", "Exit"]
        })
        .then((answer) => {
          switch (answer.viewSomething) {
            case 'Department':
              viewDepartment();
              break;
  
            case 'Role':
              viewRole();
              break;
      
            case 'Employee':
              viewEmployee();
              break;
      
            case 'Exit':
              connection.end();
              break;
      
            default:
              console.log(`Invalid action: ${answer.viewSomething}`);
              break;
          }
        });
      };

      const viewDepartment = () => {
        console.log('Selecting all department...\n');
        connection.query('SELECT * FROM department', (err, res) => {
          if (err) throw err;
          // Log all results of the SELECT statement
          console.log(res);
          runTracker();
        });
      };

      const viewRole = () => {
        console.log('Selecting all role...\n');
        connection.query('SELECT * FROM role', (err, res) => {
          if (err) throw err;
          // Log all results of the SELECT statement
          console.log(res);
          runTracker();
        });
      };

      const viewEmployee = () => {
        console.log('Selecting all employee ..\n');
        connection.query('SELECT * FROM employee ', (err, res) => {
          if (err) throw err;
          // Log all results of the SELECT statement
          console.log(res);
          runTracker();
        });
      };
// *******DELETE*******************

