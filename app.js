//  ***_//^\\_***   Chapter # 21 to 25 (STRING METHODS)    ***_//^\\_***

//      Task # 01
//Write a program that takes two user inputs for first and
//last name using prompt and merge them in a new variable
//titled fullName. Greet the user using his full name.

var firstname = prompt("Enter the first name");
var lastname = prompt("Enter the last name");
var fullname = firstname + "  " + lastname;
alert(fullname);

//      Task # 02

//Write a program to take a user input about his favorite
//mobile phone model. Find and display the length of user
//input in your browser

var greet = prompt("Enter favorite mobile phone model");
var length = greet.length;
document.write("My favorite phone is:  " + greet + "<br>" + "Length of string:  " + length );

//      Task # 03

//Write a program to find the index of letter “n” in the word
//“Pakistani” and display the result in your browser .

var string = "Pakistani";
var letter = string.indexOf("n");
document.write("String:  " + string + "<br>" + "Index of 'n':  " + letter);

//      Task # 04

//Write a program to find the last index of letter “l” in the
//word “Hello World” and display the result in your browser.

var word = "Hello World";
var last = word.lastIndexOf("l");
document.write("String:  " + word + "<br>" + "Last Index of 'l':  " + last);

//      Task # 05

//Write a program to find the character at 3rd index in the
//word “Pakistani” and display the result in your browser


var string = "Pakistani";
var letter = string.charAt(3);
document.write("String:  " + string + "<br>" + "Character at index of 3:  " + letter);

//      Task # 06

//Repeat Q1 using string concat() method.

var firstname = prompt("Enter the first name");
var lastname = prompt("Enter the last name");
var fullname = firstname.concat(" ", lastname);
alert(fullname);

//      Task # 07

//Write a program to replace the “Hyder” to “Islam” in the
//word “Hyderabad” and display the result in your browser.

var city = "Hyderabad";
var indexnum = city.indexOf("Hyder");
var firsttext = city.slice(0,indexnum);
var replacingtext ="Islam";
var thirdtext = city.slice(indexnum+5);
document.write("City:  " + city + "<br>" + "After replacement:  " + firsttext + replacingtext + thirdtext);

//      Task # 08

//Write a program to replace all occurrences of “and” in the
//string with “&” and display the result in your browser.
//var message = “Ali and Sami are best friends. They play cricket and
//football together.”;

var  message = "Ali and Sami are best friends. They play cricket and football together.";
var text =  message.replace(/and/g,"&");
document.write("Message:  " + message + "<br>" + "After replacement:  " + text);


//      Task # 09

//Write a program that converts a string “472” to a number
//472. Display the values & types in your browser.

var value = "472";
var number = parseInt(value);
document.write("Value:  " + value + "<br>" + "Type:  " + "String" + "<br>" + "Value:  " + number + "<br>" + "Type:  " + "Number");

//      Task # 10

//Write a program that takes user input. Convert and
//show the input in capital letters.

var input = "peanuts";
var uppercase = input.toUpperCase();
document.write("User input: " + input + "<br>" + "Upper case:  " + uppercase);

//      Task # 11

//Write a program that takes user input. Convert and
//show the input in title case.

var input = "javascript";
var firstchar = input.slice(0,1);
var firstchar = firstchar.toUpperCase();
var otherchar = input.slice(1);
var otherchar = otherchar.toLowerCase();
document.write("User input: " + input + "<br>" + "Title case:  " + firstchar + otherchar);

//      Task # 12

//Write a program that converts the variable num to string.
//var num = 35.36 ;
//Remove the dot to display “3536” display in your browser.

var num = "35.36";
var string = num.toString();
checkedNew = string.replace('.', "");
document.write("Number:  " + num + "<br>" + "Result:  " + checkedNew);

//      Task # 13

//Write a program to take user input and store username
//in a variable. If the username contains any special symbol
//among [@ . , !], prompt the user to enter a valid username.
//For character codes of [@ .
//Note:
//ASCII code of ! is 33
//ASCII code of , is 44
//ASCII code of . is 46
//ASCII code of @ is 64

var userInput = prompt("Enter Username");
var ascii = userInput.charCodeAt(userInput.length);
if (ascii == 33 || ascii == 44 || ascii == 46 || ascii == 64){
    alert("Please enter a valid username");
}

//      Task # 14

//You have an array
//A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
//Write a program to enable “search by user input” in an
//array. After searching, prompt the user whether the given
//item is found in the list or not.
//Note: Perform case insensitive search. Whether the user
//enters cookie, Cookie, COOKIE or coOkIE, program
//should inform about its availability. Example:

var items = ["cake","apple pie", "cookie", "chips", "patties"];
var search =prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
var search = search.toLowerCase();
var a=items.indexOf(search);
if(items.indexOf(search) !== -1){
    alert(search + "  is available at index  " + a + "  in our bakery");
}
else{
    alert("We are sorry.  " + search + "  is not available  " + "  in our bakery");

}

//      Task # 15

//Write a program to take password as an input from
//user. The password must qualify these requirements:
//a. It should contain alphabets and numbers
//b. It should not start with a number
//c. It must at least 6 characters long
//If the password does not meet above requirements,
//prompt the user to enter a valid password.
//For character codes of a-z, A-Z & 0-9, refer to ASCII
//table at the end of this document.

var password =prompt("Enter a password","For example: 123cmad");
var length = password.length;
if(length < 6){
    alert("Please enter 6 characters long")
}
var ascii = password.charCodeAt(0);
if (ascii >= 48 && ascii <= 57){
    alert("Your password is stored in database");
}
else{
     alert("Please enter a valid password");
}


var ascii = password.charCodeAt(password.length-1);
if (ascii >= 65 && ascii <= 90 || ascii >= 97 && ascii <= 122){
    alert("Please enter a valid username");
}

//      Task # 16

//Write a program to convert the following string to an
//array using string split method.
//var university = “University of Karachi”;
//Display the elements of array in your browser.

var university = "University of Karachi";
var reset = university.split("");
document.write(reset);

//      Task # 17

//Write a program to display the last character of a user input.

var userinput = prompt("Enter a word");
var last=userinput.charAt(userinput.length-1);
document.write("User input:  " + userinput + "<br>" + "Last character of input:  " + last);


//  ***_//^\\_***   Chapter # 26 to 30 (MATH METHODS)   ***_//^\\_***

//      Task # 1

//. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


var num=+prompt("Enter the number");
if(num < 0){
    alert("Please enter a positive integer")
}
var round= Math.round(num);
var floor= Math.floor(num);
var ceil= Math.ceil(num);
document.write("Number:  " + num + "<br>" + "Round off value:  " + round + "<br>" + "Floor value:  " + floor + "<br>" + "Ceil value:  " + ceil);

//      Task # 2

// Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var num=+prompt("Enter the number");
if(num > 0){
    alert("Please enter a negative floating point")
}
var round= Math.round(num);
var floor= Math.floor(num);
var ceil= Math.ceil(num);
document.write("Number:  " + num + "<br>" + "Round off value:  " + round + "<br>" + "Floor value:  " + floor + "<br>" + "Ceil value:  " + ceil);

//      Task # 3

//Write a program that displays the absolute value of a number.
//E.g. absolute value of -4 is 4 & absolute value of 5 is 5

var value =+prompt("Enter a number");
var num = Math.abs(value);
document.write("The absolute value of  " + value + "  is  " + num);


//      Task # 4

//Write a program that simulates a dice using random()
//method of JS Math class. Display the value of dice in your browser.

var random = Math.floor(Math.random() * 4);
var random1 = Math.floor(Math.random() * 6);
document.write("random dice value:  " + random + "<br>" + "random dice value:  " + random1);

//      Task # 5

//Write a program that simulates a coin toss using random()
//method of JS Math class. Display the value of coin in your
//browser

var headuser =prompt("Enter heads username");
var tailuser =prompt("Enter tails username");

var toss = Math.random()*2;
var floor = Math.floor(toss);
if(floor === 0){
    alert(floor+ "\n" + "random coin value:  " + headuser)
}
else{
    alert(floor+ "\n" +"random coin value:  " + tailuser)
}

//      Task # 6

//Write a program that shows a random number between 1
//and 100 in your browser.

var value=Math.floor((Math.random() * 100) + 1);
document.write(" random number between 1 and 100:  " + value);

//      Task # 7

//Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

var user=prompt("Enter your weight in kilograms");
document.write("The weight of user is  " + user + "  kilograms");

//      Task # 8

// Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

var user=+prompt("Enter a number between 1 to 10");
var random = Math.random()*10;
if(user === random){
    alert("Congratulate the user");
}else{
    alert("Try again.")
}


//  ***_//^\\_***   Chapter # 31 to 34 (DATE METHODS)   ***_//^\\_***

//      Task # 1

//Write a program that displays current date and time in your browser.

var date = new Date();
document.write(date);


//      Task # 2

// Write a program that alerts the current month in words.
// For example December.

var d = new Date();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var n = month[d.getMonth()];
document.write("Current month:  " + n);

//      Task # 3

// Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.
var d = new Date();
var b = d.toString();
var n = b.slice(0,3);
document.write(n);

//      Task # 4

// Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];
alert("Today is  " + n);
if(n=== "Saturday" || n=== "Sunday"){
    alert("It’s Fun day")
}else{
alert("Today is  " + n);
}

//      Task # 5

// Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

var d = new Date();
var b = d.toString();
var n = b.slice(8,10);
if( n >=1 && n<=15){
    alert("First fifteen days of the month");
}else{
    alert("Last days of the month");
}

//      Task # 6

// Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

var d = new Date();
var t = d.getTime();
var m = t/(1000*60*60);
document.write("Current Date:  " + d + "<br>" + "Elapsed milliseconds since january 1, 1970:  " + t + "<br>" + "Elapsed minutes since january 1, 1970:  " + m);

//      Task # 7

// Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

var d = new Date();
var n = d.getHours();
if( n >= 0 && n <= 11){
    alert("Its AM");
}
else{
    alert("Its PM")
}

//      Task # 8

// Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

var d = new Date(2020, 11, 31, 00, 00,00);
document.write("Later Date:  " + d);

//      Task # 9

// Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

var dob = new Date(2015, 06, 18);
var dobmili=dob.getTime();
var today = new Date();
var todaymili = today.getTime();
var diff = todaymili-dobmili;
var day=(diff/(1000*60*60*24))
var day=Math.floor(day);
document.write(day + "  day have passed since 1st Ramdan, 2015");

//      Task # 10

// Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

var dob = new Date(2015);
var dobmili=dob.getTime();
var today = new Date();
var todaymili = today.getTime();
var diff = todaymili-dobmili;
var day=(diff/1000)
var day=Math.floor(day);
document.write("On reference date  " + today + "<br>" + day + "  seconds had passed since begining of 2015");

//      Task # 11

// Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.
var d = new Date();
var a = new Date(86400000*18432);
document.write("Current date:  " + d  + "<br>" + "1 hour ago,it was  " + a);

//      Task # 13

// Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

var dob = new Date(prompt("Enter your birthday","jan 1, 1970"));
var dobmili=dob.getTime();
var a = dob.toString();
var d = a.slice(10,15);
var today = new Date();
var todaymili = today.getTime();
var diff = todaymili-dobmili;
var day=(diff/(1000*60*60*24*30*12))
var age=Math.floor(day);
document.write("Your age is  " + age + "<br>" + "Your birth Year is  " + d);

//      Task # 14


// Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

var cname = prompt("Enter the customer name");
var cmonth = prompt("Enter the current month");
var units = +prompt("Enter the units");
var Charges = 16;
var amount = units*Charges;
var latechrges = 350;
var gamount =latechrges+amount;
document.write("<h1>K-Electric Bill</h1>" + "<br>" + "Customer Name:  " + cname + "  Customer" + "<br>" + "Month:  " + cmonth + "<br>" + "Number of units:  " + units + "<br>" + "Charges per unit:  " + Charges + "<br>" +"<br>" + "Net Amount Payable (within Due Date):  " + amount + "<br>" + "late payment surcharge:  " + latechrges + "<br>" +"Gross Amount Payable (after Due Date):  " +gamount);


//  ***_//^\\_***   Chapter # 35 to 38 (FUNCTION)   ***_//^\\_***

//      Task # 01

// Write a function that displays current date & time in your browser.

function date(){
    var date = new Date();
    document.write(date);
}
date();

//      Task # 02

// Write a function that takes first & last name and then it
// greets the user using his full name.

function greets(){
    var fname = prompt("Enter the first name");
    var lname = prompt("Enter the last name");
    var fullname = fname.concat(" ", lname);
    document.write(fullname);
}
greets();
 
//      Task # 03


// Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

function add(){
    var a=+prompt("Enter a first number");
    var b=+prompt("Enter a second number");
    var z = a + b;
    return z;
}

var g = add()
alert(g);

//      Task # 04


// Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

function calc(){
    var num1 =+prompt("Enter the first number");
    var opr =prompt("Enter the operator");
    var num2 =+prompt("Enter the second number");
    if(opr === "+"){
       return num1 + num2
   }
   else if(opr === "-"){
       return num1 - num2
   }
   else  if(opr === "*"){
       return num1 * num2
   }
   else  if(opr === "/"){
       return num1 / num2
   }
   else  if(opr === "%"){
       return num1 % num2
   }
   else{
       return "Incorrect Operator!"
   }
}
var result=calc();
document.write("<h1>Calculator</h1>" + "<br>"+ result );

//      Task # 05

// Write a function that squares its argument.
function square(){
    var a =prompt("Enter a number")
    var b = a*a;
    return b;  
   }
   var c =square();
   alert(c);

   //      Task # 06

//Write a function that computes factorial of a number.

function factorial(){
    var num = +prompt("Enter the factorial of a number");
    var fact = 1;
    for(var i=num; i>=1;i--){
        fact=fact*i;
    }
    return fact;
}
var result = factorial();
alert(result);

//      Task # 07

//Write a function that take start and end number as inputs
//& display counting in your browser.

function counting(){
    var snum = +prompt("Enter the start number");
    var lnum = +prompt("Enter the end number");
    for(var i=snum; i<=lnum;i++){
        document.write(i+"<br>")
    }
}
var result = counting();

//      Task # 08

// Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

function calculateHypotenuse(){
    function calculateSquare(){  
    var b = +prompt("Enter the base");
    var p = +prompt("Enter the perpendicular");
        var base = b*b;
        var per = p*p;
        var h=base+per;
        var hypotenuse =h*h;
        return hypotenuse; 
       }
       var result=calculateSquare();
       return result;
}
var result1=calculateHypotenuse();
alert(result1);

//      Task # 09

// Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

function area(){
    var width = 10;
    var height=+prompt("Enter the height");
    a = width * height;
    return a;
}
var result = area();
alert(result);

//      Task # 10

// Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam

function palindrome(){
    var name =prompt("Enter the name");
    var split = name.split("").reverse().join("");
    if(name===split){
        alert("It is palindrome");
    }
else{
    alert("It is not palindrome");
}
}
var result = palindrome();

//      Task # 11

// Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'


function uppercase(str) 
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
alert(uppercase("the quick brown fox"));

//      Task # 12

// Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'


function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
alert(find_longest_word('Web Development Tutorial'));

//      Task # 13

// Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of 
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'


function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

alert(char_count('JSResourceS.com', 'o'));


//      Task # 14

// The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

function Geometrizer(){
    function calcCircumference(){
        var pi = 3.14;
        var r=prompt("Enter the radius");
        var circum = 2*pi*r;
        document.write("Circumference of circle  " + circum);
    }
    function calcArea(){
        var rr = r*r;
        a=pi*rr;
        document.write("Area of circle  " + a);
    }
    return calcCircumference + calcArea;
    }
    var result=Geometrizer();