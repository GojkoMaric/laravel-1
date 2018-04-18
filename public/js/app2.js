var test = "Test variable";
console.log(test, 'in same file.');

var anon = function() {
    return console.log(test, 'in anonymous function.');
 };

 anon();


var jsonObj = {"name":"Object", "number":1};

var jsonArray = [
    {
        "name":"First Obj",
        "number":1
    },
    {
        "name":"Second Obj",
        "nubmer":2
    },
    {
        "name":"Third Obj",
        "number":3
    }
];

//es6
class PersonES6 {
    constructor(firstName, lastName, gender){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
    }
}

var johnDoe = new PersonES6 ('John', 'Doe', 'Male');
var mariaDoe = new PersonES6 ('Maria', 'Doe', 'Female');

class Teacher extends PersonES6 {
    constructor(firstName, lastName, gender, lecture){
        super(firstName, lastName, gender);
        this.lecture = lecture;
    }
}

var tomDoe = new Teacher ('Tom', 'Doe', 'Male', 'Medicine');
var sandraDoe = new Teacher('Sandra', 'Doe', 'Female', 'Law');

//es5

function Person (firstName, lastName, gender){
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;

    this.fullname = function(){
        return 'Name of this object is '+this.firstName+' '+this.lastName;
    }
}

var janeTailor = new Person('Jane', 'Tailor', 'Female');
var mikeTailor = new Person('Mike', 'Tailor', 'Male');

function Student (firstName, lastName, gender, faculty){
    Person.call(this, firstName, lastName, gender);
    this.faculty = faculty;
}

var thomasSmith = new Student('Thomas', 'Smith', 'Male', 'Technical');
var marySmith = new Student('Mary', 'Smith', 'Female', 'Economics');

Person.objectDescribe = function(){
    return "This object is the Person object";
}

Person.objectName = "Name of this class is Person";

function callback1(){
    return "This is a callback function";
};

function callback2(callback){
    console.log("This is a scope of function for callback");
    return callback();
};

var promising = new Promise(function (resolve, reject){
    console.log('aaaa');
    if(1===1){
        // resolve('Working')
        setTimeout(() => resolve('Gotovo'), 2000);
    }
        else {
        // reject(Error('it broke'));
    };
});
