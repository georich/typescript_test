class Student {
  fullName: string;

  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = `${firstName} ${middleInitial} ${lastName}`;
  }
}

interface Person {
  firstName: string;
  middleInitial: string;
  lastName: string;
  fullName: string;
}

const greeter = (person: Person) => {
  // return `Hello, ${person.firstName} ${person.middleInitial} ${person.lastName}`;
  return `Hello ${person.fullName}`;
};

// const user = {
//   firstName: 'George',
//   lastName: 'User'
// };

const user = new Student('George', 'T.', 'Richards');

console.log(greeter(user));

export {}; // removes tslint error
