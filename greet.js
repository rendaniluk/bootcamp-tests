//const assert = require('assert');// importing assert
//declaring the function.
var greet = function (name) {
    return 'Hello, ' +name;
};


//console.log(greet('azola')/*calling function*/); //printing the massage and name
console.log(greet('Precious')/*calling function*/); //printing the massage and name
assert.equal(greet('Andre'), 'Hello, Andre');//testing code using assert function
assert.equal(greet('Karen'), 'Hello, Karen');//testing code using assert function

