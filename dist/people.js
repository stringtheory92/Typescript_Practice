"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Principal = exports.Teacher = exports.Student = exports.Person = void 0;
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log("walking");
    }
}
exports.Person = Person;
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log("taking a test");
    }
}
exports.Student = Student;
class Teacher extends Person {
    get fullName() {
        return "Professor " + super.fullName;
    }
}
exports.Teacher = Teacher;
class Principal extends Person {
    get fullName() {
        return "Principal " + super.fullName;
    }
}
exports.Principal = Principal;
//# sourceMappingURL=people.js.map