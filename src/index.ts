import { Employee, Person, Principal, Student, Teacher } from "./people";
import { Ride } from "./ride";
import { Circle } from "./shapes";

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

console.log(Ride.activeRides);

printNames([
  new Student(1, "John", "Smith"),
  new Teacher("Adam", "Kabak"),
  new Principal("Gary", "Vee"),
]);

function printNames(people: Person[]) {
  for (let person of people) console.log(person.fullName);
}

let shape = new Circle(10, "red");
shape.render();

let bob = new Employee("Bob", "Cobb");
bob.address = { street: "Clark", city: "Kansas City", zipCode: 64111 };
console.log(bob.printAddress);
