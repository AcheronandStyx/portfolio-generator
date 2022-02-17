
// separate JS file to house functions and call into main.


/*
a feature called template literals to embed JavaScript expressions into the string. 
Template literals are enclosed by backticks (`) instead of double or single quotes.
*/

const generatePage = (userName, githubName) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>
  
    <body>
      <h1>${userName}</h1>
      <h2><a href="https://github.com/${githubName}">Github</a></h2>
    </body>
    </html>
    `;
};

// export the function
module.exports = generatePage;