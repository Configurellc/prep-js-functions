/**
 *  Below are some specifications for Functions to be built.
 *
 *  #1
 *  Declare Two Variables
 *     - `a` random Number value
 *     - `b` random Number value
 *
 *  We will be using both of these variables to pass as `parameters` to the
 *  following functions that we will write. Pay close attention to the other
 *  variable names you will create as they will become input to _other_
 *  functions.
 */

 // var name = 1;
 // var dev =2;
 var a = 9
 var b = 8

/**
 *  #2
 *  Function - add
 *
 *  This function returns the result of adding `a` and `b` together.
 *  Store this value in a variable named `sum`.
 */
//  var sum = "name" + "dev";
// function add(thing1, thing2) {
// 	return thing1 + thing2; 

// }
// console.log(add(name,dev));
 function add(num1, num2) {
 	return num1 + num2;
 }

 add();

 var sum = add(a,b);

 console.log(sum);
/**
 *  #3
 *  Function - subtract
 *
 *  This function returns the result of subtracting `b` from `a`.
 *  Store this value in a variable named `difference`
 */

b = 23;
a = 14;

function subtract(sub1, sub2) {
	return sub1 - sub2;
}
subtract();

var difference = subtract(b,a);

console.log(difference);
// function difference(a, b) {
// 	return b-a;
// };

// console.log(difference(23, 4));
/**
 *  #4
 *  Function - multiply
 *
 *  This function returns the result of multiplying `b` by `a`.
 *  Store this value in a variable named `product`
 */
function multiply(mult1, mult2) {
	return mult1 * mult2;	
}


multiply();

var product = multiply(b,a);

console.log(product);
// function product(b, a) {
// 	return b*a;
// };

// console.log(product(100,100));


/**
 *  #5
 *  Function - checkDifference
 *
 *  This function accesses the value stored in the `difference`
 *  variable and uses this number to return the string
 *  "My football team lost X times this week", where `X` is the
 *  value stored in `difference`.
 */
function checkDifference(diff) {
	return "My football team lost" +" "+ diff+ " "+ "time this week, where" + " "+ diff;
}
checkDifference();

var hello = checkDifference(difference);

console.log(hello);


// var difference = a-b;
// function checkDifference() {
// 	return  "My football team lost"+" " + difference +" "+ "times this week";

// }

// console.log(checkDifference(9,4));
/**
 *  #6
 *  Function - checkSum
 *
 *  This function checks the value stored at `sum` and
 *  uses that number to print to the screen the phrase
 *  "I CAN ADDZ X NUMBERS"  where `X` is the value
 *  stored in the variable `sum`.
 */

 function checkSum(checkMe) {
 	return "I CAN ADD"+" "+checkMe+ " "+"where"+ " "+checkMe + " "+ "is the value stored in the variable"+ " "+sum;
 }
 checkSum;

 var sumCheck = checkSum(sum);

 console.log(sumCheck);
//  var sum = a + b;
// function checkSum(a, b) {
// 	return "I CAN ADD"+ " "+ a+b +"NUMBERS where"+ sum + "is the value stored in the variable"+ sum;
// }
// console.log(checkSum(39,49)); 
// /**
//  *  #7
//  *  Function - checkProduct
//  *
//  *  This function checks the value stored at `product` and
//  *  multiplies it by the number stored at `difference` and
//  *  then prints the result to the console.
//  */
// var product = 20;
// function checkProduct(product, difference) {
// 	return product - difference;
// }
function checkProduct(check1, check2) {
	return check1 * check2;
}
checkProduct();

var combine = checkProduct(product,difference);

console.log(combine);
// console.log(checkProduct(20, 4));


/**
 *  #8
 *  Function - addThenSubtract
 *
 *  This function takes three `Number` arguments named by you,
 *  then adds the first two arguments together.
 *  Then with the sum of that operation, subtract
 *  the value at the third argument. _This function should
 *  make use of your previous functions_.
 *
 *  **example:**
 *      addThenSubtract(4, 5, 7); //-> returns 2 because 4 + 5 - 7 = 2
 */


/**
 *  #9
 *  Function - addThenMultiply
 *
 *  This function takes three `Number` arguments named by you,
 *  then adds the first two arguments together.
 *  Then with the sum of that operation multiply it by the third argument.
 *  _This function also should make use of your previous functions_.
 *
 *  Store the return of this function to a variable named `howMany`
 */


/**
 *  #10
 *  Function - createFullName
 *
 *  @param Datatype: String firstName
 *  @param Datatype: String lastName
 *  @return Datatype: String
 *
 * This function takes two String arguments `firstName` and `lastName`.
 * This function `returns` back a string which represents someone's full name.
 *
 * Call this function and pass your first and last name into it.
 * Store the return value to a variable named `myFullName`
 */
// function createFullName(lastName, firstName) {
// 	var result =""
// 	result = firstName + " "+ lastName;
// 	return result;
// }
// var firstName = "Joshua";
// var lastName = "Lee"
// var MyName = createFullName("Joshua", "Lee");
// console.log(MyName);

/**
 *  #11
 *  Function - verifyDrinkingAge
 *
 *  @param Datatype: Number age
 *  @return Datatype: Boolean
 *
 *  This function takes one Number argument `age`.
 *  This function returns the `Boolean` value `true` or `false` if `age` is
 *  lower than the legal drinking age in the state of Hawaii.
 *
 *  **Call this function and pass in a number value.
 *  Store the return value to a variable named** `canDrinkBeer`
 */
// function verifyDrinkingAge(age) {
// 	var result;

// 	result = age>= 21;
// 	return result;
// }

// var canDrinkBeer = verifyDrinkingAge(22);


// console.log("Can i drink beer" +" "+ verifyDrinkingAge(24));

/**
 *  #12
 *  Function - throwParty
 *
 *  This function checks the value stored at the `canDrinkBeer` variable and
 *  if the value is `false` it should print to a message to the screen,
 *  "The Party will have tons of Cake!" otherwise this message
 *  should be "This Party will have an open bar".
 */
// function throwParty(age) {
// 	if( canDrinkBeer === false) {
// 		return "The party will have tons of Cake!";
// 	}else{
// 		return "The Party will have an open bar"; 
// 	}
// }

// var well = throwParty(22);

// console.log(well);



/**
 *  #13
 *  Function - eatFood
 *
 *  This function takes 3 arguments
 *  `firstName`, `lastName`, `food` and prints out a message to your screen.
 *  Internally this function will make use of the `createFullName`
 *  function you created earlier.
 *
 *  **example input:**
 *      if someone called your program like this `eatFood( "John", "Papa", "Pizza" )`
 *  **example output:**
 *     "John Papa loves to eat Pizza"
 *
 *  **example input:**
 *      if someone called your program like this `eatFood( "Peter", "Bojangles", "California Burritos" )`
  *  **example output:**
 *      "Peter Bojanglesloves loves to eat California Burritos"
 */
// var food = "hamburger";
// function eatFood(firstName, lastName, food) {
// 	return "Geeesh" + " "+ firstName+ " " + lastName+ " "+ "you really like" + food;

// }

// var cookout = eatFood("Joshua", "Lee", "Pizza");
// console.log(cookout);

/**
 *  #14
 *  Function - repeater
 *
 *  This function will return a string to that repeats one of the phrases
 *  below `X` amount of times, where `X` is the value stored at `howMany`.
 *  Inside of this function it will check if
 *  the value of `canDrinkBeer`, if the value is true
 *  the message will be `"Bacon Pancakes, makin' Bacon Pancakes..."`
 *  othewise the message will be `"Let it go.... LET IT GOOOOOOoOoOoOo..."`
 */




// function repeater(howMany) {
	
// 	if(well>howMany){
// 		for (var i = 0; i <= howMany; i++) {
// 		console.log("chug");
// 	}
// 	// } else {
// 	// 	for (var j = 10; j >howMany; j++)
// 	// 	console.log("DEV LEAGUE!!! DEV LEAGUE!! DEV LEAGUE!!");
// 	// 	}
// }
// console.log(repeater(11));