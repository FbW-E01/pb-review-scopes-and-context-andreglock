/* 
1: This code will print the variable name "Joel" and then give an error "likes is undefined", 
because likes is a const that exists only inside the scope in which it was declared.
*/

/* 
2: Assuming "this" was previously declared, the code will first print (console.log) "this", 
and then it will print "this" again when the function "x" is called.
*/

/* 
3: This code will print "this" when an instance of Test is made, because this is part of the constructor function.
*/

/* 
3 (again): This code will print "test, best", then "test", then it will call the function "b" again.
Then it prints "test, best" and "test" one more time.
*/

function random() {
    return Math.random();
}

function meow() {
    console.log(`“Meow” means “woof” in cat.”`);
}

function type(variable) {
    return typeof variable;
}

function firstLetter(string) {
    return string[0];
}

function firstItem(array) {
    return array[0];
}

function isThree(string) {
    return string.length === 3;
}