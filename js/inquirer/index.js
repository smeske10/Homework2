const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generateHTML')

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of this article?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Input the filepath for banner image',
            name: 'banner'
        },
        {
            type: 'input',
            message: 'Paste the overview statement',
            name: 'overview'
        },
        {
            type: 'list',
            message: 'How many article sections are there? (Max 3)',
            name: 'sections',
            choices: ['1', '2', '3'],
            default: '1'
        },
        {
            type: 'input',
            message: 'What is the title of section 1?',
            name: 'section1title',
            when: (answers) => answers.section === '1'||'2'||'3'
        },
        {
            type: 'input',
            message: 'Paste the section 1 body',
            name: 'section1body',
            when: (answers) => answers.section === '1'||'2'||'3'
        },
        {
            type: 'input',
            message: 'What is the title of section 2?',
            name: 'section2title',
            when: (answers) => answers.section === '2'||'3'
        },
        {
            type: 'input',
            message: 'Paste the section 2 body',
            name: 'section2body',
            when: (answers) => answers.section === '2'||'3'
        },
        {
            type: 'input',
            message: 'What is the title of section 3?',
            name: 'section3title',
            when: (answers) => answers.section === '3'
        },
        {
            type: 'input',
            message: 'Paste the section 2 body',
            name: 'section3body',
            when: (answers) => answers.section === '3'
        },
    ]).then((data) => {
        console.log(data);
        fs.writeFile(`${data.title}.html`, generateHTML(data),
        error =>{
            if (error) {
                console.log('Please input all the data')
            }
            console.log('Your article has been published')
        }
    )})
    .then((data) => {
        
    })