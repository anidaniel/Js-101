console.log("Hello from anidaniel, in console mode!")
// console.log(document);
// console.log(typeof document);
// document.getElementById('example').innerHTML = 'Js Rulez bru';

// var a, b;
// a = 'hello';
// b = a + ' world';
// b = 'hello world';
// document.getElementById("anidaniel").innerHTML = b;
// window.alert("WELCOME TO OBLIVION");
// console.log("YOLA HOLA");
// alert("WOLFIE");

function fun() {
    document.getElementById("wolf").innerHTML = "WOLF SPACE Ltd.";
    console.log("Click-works");
}

var multiply = function(a, b) {
    return a*b;
}

var product = multiply(5, 10);
console.log(product);
// myFunc();

//OBJECTS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var student = {
    name: 'Ani',
    school: 'CSA',
    course: 'BS',
    // inlooped func
    native: function() {
        console.log("KOLKATA")
    }
};

console.log(student); //full object desc 

console.log(student.name); //#1 >> specific object desc (using . identifier)

console.log(student["school"]);  //#2 >> specific object desc (using square brackets)

student.native(); //inline function call 

// ARRAYS AND ARRAYS METHODS >>>>>>>>>>>>>>>>>>>>>>>
//--------------------------------------------------
var points = [10, 20, 30, 40, 50];
points.push(60);

var last = points.pop();
var first = points[0];
points.push(70);

console.log(points, last);
console.log("Length: ", points.length);
console.log(first);
console.log(points[1]);

// BOOLEANS AND COMPARISON OPERATOR >>>>>>>>>>>>>>>>>>>
//-----------------------------------------------------
var a = true;
var b = false;
var c = 5 == 5;
var d = 5 == 8;
console.log(a);
console.log(typeof a);
console.log(b);
console.log(c);
console.log(d);
console.log("5 > 7 is",5 > 7);
console.log("5 < 7 is",5 < 7);
console.log("5 <= 7 is",5 <= 7);

// IF | IF-ELSE | ELSE IF => CONTROL STATEMENTS
function gun() {

    var hour = new Date().getHours();
    var greeting;
    // if (new Date().getHours() < 18) {
    //     document.getElementById("demo").innerHTML = "DEMONSTRATION CODE"
    // }
    if (hour < 10) {
        greeting = "OHAYOU <3";
    } else if (hour < 20) {
        greeting = "KONNICHIWA :D";
    } else {
        greeting = "OYASUMI :*";
    }

    document.getElementById("demo").innerHTML = greeting;
}

// RANDOMIZE FUNCTION EXAMPLE :
function mathRan() {
    if (Math.random() < 0.5) {
        text = "BOOYAH";
    } else {
        text = "HOOYAH";
    }
    document.getElementById("demo").innerHTML = text;
}

//Switch statement

//var x;

function switchDemo() {
    var text;
    var x = prompt("Please enter a char ?","a - b - c - d....");

    switch(x) {
        case "a": 
            console.log("One!");
            break;
        case "b": 
            console.log("Two!");
            break;
        case "c": 
            console.log("Three!");
            break;
        case "d": 
            console.log("Four!");
            break;
        default:
            console.log("BOOYAH = " + x);
    }
}
//var x = 7;
// switch(x) {
//     case 1: 
//         console.log("One!");
//         break;
//     case 2: 
//         console.log("Two!");
//         break;
//     case 3: 
//         console.log("Three!");
//         break;
//     case 4: 
//         console.log("Four!");
//         break;
//     default:
//         console.log("BOOYAH, num = " + x);
//         break;
// }

/*=========================================================================*/
/* ============================ L O O P S =================================*/
/*=========================================================================*/

// FOR Loop:
// For loop for integers iteration
console.log("  ");
console.log("  ");
console.log("For loop output: ");
for (var i = 0; i < 5; i++) {
    console.log(i)
}

//For loop for array of strings 
var names = ["Thor","Luther","Arthur","Ani"];
for (var j = 0; j<names.length; j++) {
    console.log(names[j]);
}

//WHILE LOOP
var k = 0;
console.log("  ");
console.log("  ");
console.log("While loop output: ");
while ( k < names.length) {
    console.log(names[k]);
    k++;
}

//DO WHILE LOOP
console.log("  ");
console.log("  ");
console.log("Do-While loop output: ");
var l = 0;
do {
    console.log(names[l]);
    l++;
} while ( l < names.length)