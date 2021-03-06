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

/*to add 5 to myVar. Since this is such a common pattern, there are operators which do both a mathematical operation and 
assignment in one step.
One such operator is the += operator.
can be done like this 
var myVar = 1;
myVar += 5;
console.log(myVar);
likewise for -= *= and /= 
apparently the numbers cannot be on the left hand side during this operation */


// In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash (\) in front of the quote.
// for example 
var sampleStr = "Alan said, \"Peter is learning JavaScript\".";
//this stops the computer from thinking there's two seperate strings 
// it will print Alan said, "Peter is learning JavaScript".




/* Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	word boundary
\f	form feed
*/
//for example 
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
//prints
//myStr:
//FirstLine
//	\SecondLine
//ThirdLine

/*Bracket notation is a way to get a character at a specific index within a string.

Most modern programming languages, like JavaScript, don't start counting at 1 like humans do. They start at 0. This is referred to as 
Zero-based indexing.

For example, the character at index 0 in the word Charles is C. So if var firstName = "Charles", you can get the value of the first letter of the 
string by using firstName[0].
*/
var firstName = "Charles";
var firstLetter = firstName[0];
// firstLetter would have a value of the string C.


/*In order to get the last letter of a string,
 you can subtract one from the string's length.
For example, if var firstName = "Charles", you can get
the value of the last letter of the string by using firstName[firstName.length - 1].
*/
var firstName = "Charles";
var lastLetter = firstName[firstName.length - 1];

/* 
With JavaScript array variables, we can store several pieces of data in one place.

You start an array declaration with an opening square bracket, 
end it with a closing square bracket, and put a comma between each entry, 
like this:
*/
var sandwich = ["peanut butter", "jelly", "bread"]


/*You can also nest arrays within other arrays 
(meaning theres an array inside an array), like below: */
[
    ["Bulls", 23],
    ["White Sox", 45]
]

//Unlike strings, the entries of arrays are mutable and can be changed freely.
var ourArray = [50, 40, 30];
ourArray[0] = 15;
//so the value in the first place of the array is now 15

/*When you use brackets to access your array, the first set of brackets refers  
to the entries in the outer-most (the first level) array, and each additional pair of brackets refers to the next level of entries inside. */

var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [
        [10, 11, 12], 13, 14
    ]
];
arr[3];
arr[3][0];
arr[3][0][1];

/* arr[3] is [[10, 11, 12], 13, 14], 
arr[3][0] is [10, 11, 12], 
and arr[3][0][1] is 11.
*/

//.push() takes one or more parameters and "pushes" them onto the end of the array.
var arr1 = [1, 2, 3];
arr1.push(4);

var arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);

// another example
var myArray = [
    ["John", 23],
    ["cat", 2]
];

myArray.push(["dog", 3]);


// .pop() removes a value off the end of an array 
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);

/*The first console.log will display the value 6, 
and the second will display the value [1, 4]. */

//pop() always removes the last element of an array. What if you want to remove the first?
//That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.

var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray would have a value of the string Stimpson, and ourArray would have ["J", ["cat"]].

/*you can also unshift elements to the beginning of an array i.e. add elements in front of the array.
.unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift()
 adds the element at the beginning of the array. */

var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");

//After the shift, ourArray would have the value ["J", "cat"]. After the unshift, ourArray would have the value ["Happy", "J", "cat"].

// another example
var myArray = [
    ["John", 23],
    ["dog", 3]
];
myArray.shift();

myArray.unshift(["Paul", 35]);

//Adds ["Paul",35] to the beginning of the myArray variable using unshift().


//We can divide up our code into reusable parts called functions.
//example of a function 
function functionName() {
    console.log("Hello World");
}
//All of the code between the curly braces will be executed every time the function is called.
//you can call the function just by typing out its name --> functionName() 

/* When a function is defined, it is typically defined along with one or more parameters. 
The actual values that are input (or "passed") into a function when it is called are known 
as arguments. */

function testFun(param1, param2) {
    console.log(param1, param2);
}

//another example 
function functionWithArgs(a, b) {
    console.log(a + b)
}
functionWithArgs(1, 2)
    //when we call this arguement functionWithArgs (1,2) we should get a value of 3


//scope refers to the visibility of variables 
// variables defined outside of a function block have global scope
//global scope means the can be seen everywhere in your javascript code
// for example 
var myGlobal = 10;
//this variable can be indentified in the function below
function fun1() {
    oopsGlobal = 5
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined")
        output += "myGlobal: " + myGlobal;
}
if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
}
}
//normally using a var keyword inside a function scopes that varible to that function
//which means it wont be recognisable in other function
//for example if the oopsGlobal had been attached to a varible inside the function 
//then it would show as undefined in the fun2 function
//not assigning the var inside a function makes it global scope automatically

//its possible to have global and local scopes with the same name
//for example
var someVar = "Hat";

function myFun() {
    var someVar = "Head";
    return someVar;
}
//when this is done local variables take precedence over global variables
//so the example will return string Head because there's a local version of the varible present

//in a function with arguments the return statement can be used to send a value back from a function for example 
function plusThree(num) {
    return num + 3;
}
var answer = plusThree(5);
// plusThree took the argument for num and returnt the answer 8 (num+3)


// we can take return values of functions and assign it to variables 
// for example 
//Assume we have pre-defined a function sum which adds two numbers together, then:
ourSum = sum(5, 12);
// this will call the sum function which means ourSum is 17

// if you reassign a global varible to the return value of a function it should work 
//for example
var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}
// processed is already defined as 0

// if we call 
processed = processArg(7)
    // the return value for processed is 2 rather than 0


//a queue is an abstract data sctructure where items are kept in order
// new items can be added at the back of the queue and old taken off the front
function nextInLine(arr, item) {

    arr.push(item)
    return arr.shift();
}
var testArr = [1, 2, 3, 4, 5];
//before the function the array was [1,2,3,4,5]
//after the function the array became [2,3,4,5,6]

//a loop is a programming tool that repeats a set of instructions until a specfied condition
//the specified condition is called a stopping condition
//for loop
//instead of writing the same code over and over, loops allow us to tell the computer
//to repeat a block of code on its own.
//a for loops includes an iterator variable that appears in all 3 expressions 
//iterator varible is initalised
//checked against the stopping condition
// and assigned a new value on each loop iteration
// best practice to use a descriptive name for an iterator variable

// for loop contains three expressions seperatred by ;
//1. an initialisation starts the loop and can also be used to declare the iterator variable

//2. a stopping condition is the condition that the iterator variable is evaluated against  if
// the condition evaluates to true the code will block will run and if it evaluates to false 
// the code will stop

//3.