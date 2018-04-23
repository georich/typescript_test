interface Person {
  firstName: string;
  lastName: string;
}

const greeter = (person: Person) => {
  return `Hello, ${person}`;
};

let user = {
  firstName: 'George',
  lastName: 'User'
};

console.log(greeter(user));

export {}; // removes tslint error
