// GIVEN
var example;
var example = "I'm the example!";
console.log(example);
// AFTER HOISTING BY THE INTERPRETER
console.log(example); // logs undefined
example = "I'm the example!";


let example = "I'm the example!";    
console.log(example);


// --------------------------- 1 ----------------------------------------------
var hello = 'world';                                 
console.log(hello);                                   


// --------------------------- 2 ----------------------------------------------
var needle = 'magnet';
var needle = 'haystack';
function test(){
    console.log(needle);
}
test();

// --------------------------- 3 ----------------------------------------------
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
}
console.log(brendan);
console.log(brendan);

// --------------------------- 4 ----------------------------------------------
var food = 'chicken';
console.log(food);
eat();
function eat(){
    var food = 'gone';
    food = 'half-chicken';
    console.log(food);
}

// --------------------------- 5 ----------------------------------------------
var food = "fish";
console.log(food);
var mean = function() {
    food = "chicken";
    mean();
    console.log(food);
    console.log(food);
}
console.log(food);

// --------------------------- 6 ----------------------------------------------

var genre = "disco";
rewind();
function rewind() {
    var genre = "r&b";
    genre = "rock";
    console.log(genre);
    console.log(genre);
}
console.log(genre);
console.log(genre);

// --------------------------- 7 ----------------------------------------------
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// --------------------------- 8 ----------------------------------------------
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    let dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
    dojo.hiring = true;
    }
    else if(dojo.students <= 0){
    dojo = "closed for now";
    }
    return dojo;
}
