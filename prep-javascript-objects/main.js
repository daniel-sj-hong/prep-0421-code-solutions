var person = {
  firstName: 'Daniel',
  lastName: 'Hong',
  hobby: 'jiu-jitsu'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log(fullName);

person.job = 'funemployed';

var currentJob = 'My current job is: ' + person.job;
console.log(currentJob);

person.previousJob = 'sales';

var previousJob = 'My previous job was: ' + person.previousJob;
console.log(previousJob);

var completeObject = 'My complete person object: ';
console.log(completeObject);
console.log(person);

var myCar = {
  make: 'Honda',
  model: 'Pilot',
  year: '2017'
};

console.log(myCar);

myCar['owner'] = fullName;

var nameCar = 'My name is ' + fullName + ' and I drive a ' + myCar['year'] + ' ' + myCar['make'] + ' ' + myCar['model'];
console.log(nameCar);

myCar['color'] = 'white';

console.log(myCar);
