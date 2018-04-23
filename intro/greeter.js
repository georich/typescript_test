"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = `${firstName} ${middleInitial} ${lastName}`;
    }
}
const greeter = (person) => {
    // return `Hello, ${person.firstName} ${person.middleInitial} ${person.lastName}`;
    return `Hello ${person.fullName}`;
};
// const user = {
//   firstName: 'George',
//   lastName: 'User'
// };
const user = new Student('George', 'T.', 'Richards');
console.log(greeter(user));
