
/*
 .slice() returns everything from the first zero-based index we provide as the first argument up to 
 but not including the zero-based index we provide as the second argument. So, to return through the 
 last index in the array, we provide the length of the array as the second argument.
 */
const fs = require('fs');
const generatePage = require('./src/page-template.js'); // link the other js file

const profileDataArgs = process.argv.slice(2, process.argv.length);

// extract the command line args
const [argname, github] = profileDataArgs;

const pageHTML = generatePage(argname, github);

// write to output file index.html the html created by generatePage
fs.writeFile('./index.html', pageHTML, err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});


