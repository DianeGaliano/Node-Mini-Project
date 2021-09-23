const inquirer = require("inquirer");
const fs = require("fs");

inquirer
    .prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your user name?',
          }, 
          {
            type: 'input',
            name: 'location',
            message: 'Where are you from?',
          }, 
          {
            type: 'input',
            name: 'hobby',
            message: 'What is your favorite hobby?',
          }, 
          {
            type: 'checkbox',
            name: 'food',
            message: 'What is your favorite food?',
            choices: ["cheese burger", "pizza", "sushi", "Lobster and Steak Dinner"]
          }, 
          {
            type: 'input',
            name: 'LinkedIn',
            message: 'What is your LinkedIn URL',
          }, 
          {
            type: 'input',
            name: 'GitHub',
            message: 'What is your GitHub Username?',
          }, 
    ])
    .then((response) => {
        
const htmlString = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>${response.username}</h1>
    <h2>${response.location}</h2>
    <h2>${response.hobby}</h2>
    <h2>${response.food}</h2>
    <h2>${response.LinkedIn}</h2>
    <h2>${response.GitHub}</h2>

</body>
</html>`;
        fs.writeFile("index.htm", htmlString, (err)=> {
            if (!err) {
                console.log("Sucess!")
            }
        }
        
        );
    });


    // err ? console.log(err) : console.log("Sucess!")