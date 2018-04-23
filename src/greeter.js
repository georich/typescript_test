"use strict";
exports.__esModule = true;
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
var greeter = function (person) {
    // return `Hello, ${person.firstName} ${person.middleInitial} ${person.lastName}`;
    return "Hello " + person.fullName;
};
// const user = {
//   firstName: 'George',
//   lastName: 'User'
// };
var user = new Student('George', 'T.', 'Richards');
console.log(greeter(user));
