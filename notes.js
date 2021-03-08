console.log(5);
// console.log() logs or prints onto the screen

// this is a single line comment
/* this is a 
multiline comment */
console.log( /* but this can also be used inside of brackets like this */ 22)
    //so the comment will be ignored





//You can easily increment or add one to a variable with the ++ operator.

i++;

//is the equivalent of

i = i + 1;

// same thing can happen for decrement or decreasing the variable by 1

i--;

// is the equivalent of

i = i - 1;

myVar = myVar + 5;

//to add 5 to myVar. Since this is such a common pattern, there are operators which do both a mathematical operation and assignment in one step.
//One such operator is the += operator.
//can be done like this 
var myVar = 1;
myVar += 5;
console.log(myVar);
// likewise for -= *= and /= 
//apparently the numbers cannot be on the left hand side during this operation


// In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash (\) in front of the quote.
// for example 
var sampleStr = "Alan said, \"Peter is learning JavaScript\".";
//this stops the computer from thinking there's two seperate strings 
// it will print Alan said, "Peter is learning JavaScript".