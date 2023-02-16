export class Person {
  constructor(public firstName: string, public lastName: string) {}
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
  walk() {
    console.log("walking");
  }
}

export class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log("taking a test");
  }
}

export class Teacher extends Person {
  override get fullName() {
    return "Professor " + super.fullName;
  }
}

export class Principal extends Person {
  override get fullName() {
    return "Principal " + super.fullName;
  }
}

interface Address {
  street: string;
  city: string;
  zipCode: number;
}
export interface Employee {
  name: string;
  salary: number;
  address: Address;
}

export class Employee extends Person implements Employee {
  get printAddress() {
    return `${this.address.street}, ${this.address.city}, ${this.address.zipCode}`;
  }
}
