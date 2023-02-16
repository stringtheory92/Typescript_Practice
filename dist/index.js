"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const people_1 = require("./people");
const ride_1 = require("./ride");
const shapes_1 = require("./shapes");
let ride1 = new ride_1.Ride();
ride1.start();
let ride2 = new ride_1.Ride();
ride2.start();
console.log(ride_1.Ride.activeRides);
printNames([
    new people_1.Student(1, "John", "Smith"),
    new people_1.Teacher("Adam", "Kabak"),
    new people_1.Principal("Gary", "Vee"),
]);
function printNames(people) {
    for (let person of people)
        console.log(person.fullName);
}
let shape = new shapes_1.Circle(10, "red");
shape.render();
//# sourceMappingURL=index.js.map