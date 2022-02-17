var message = 'Hello Node!';

var sum = 5 + 3;

var commandLineArgs = process.argv;
console.log(commandLineArgs);

/*
 .slice() returns everything from the first zero-based index we provide as the first argument up to 
 but not including the zero-based index we provide as the second argument. So, to return through the 
 last index in the array, we provide the length of the array as the second argument.
 */

const profileDataArgs = process.argv.slice(2, process.argv.length);

const printProfileData = (profileDataArr) => {
    profileDataArr.forEach(profileItem => console.log(profileItem))


    console.log('================');

};

printProfileData(profileDataArgs);