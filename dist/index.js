"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
let bob = new people_1.Employee("Bob", "Cobb");
bob.address = { street: "Clark", city: "Kansas City", zipCode: 64111 };
console.log(bob.printAddress);
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new KeyValuePair("1", 0);
class ArrayUtils {
    static wrapInArray(value) {
        return [value];
    }
}
console.log(pair, ArrayUtils.wrapInArray(1));
function fetch(url) {
    if (url)
        return { data: null, error: null };
    return { data: null, error: null };
}
let productResult = fetch("url");
let userResult = fetch("url");
console.log(productResult, userResult);
class Man {
    constructor(name) {
        this.name = name;
    }
}
class Customer extends Man {
}
function echo(value) {
    return value;
}
console.log(echo(new Customer("adam")));
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    get objects() {
        return this._objects;
    }
    find(property, value) {
        return this._objects.find((obj) => obj[property] === value);
    }
}
let store = new Store();
store.add({ name: "a", price: 1 });
store.find("name", "a");
store.find("price", 1);
class CompressibleStore extends Store {
    compress() { }
}
let compressed = new CompressibleStore();
compressed.add({ name: "basketball", price: 20 });
console.log(compressed.objects);
class ProductStore extends Store {
    filterByCategory(category) {
        if (category)
            return [];
        return [];
    }
}
console.log(new ProductStore().filterByCategory("category"));
let optionalProduct = {
    name: "x",
    price: 5,
};
let product = {
    name: "a",
    price: 1,
};
let moreFlexibleProduct = {
    name: "b",
    price: 10,
};
console.log(product, moreFlexibleProduct, optionalProduct);
function Component(options) {
    return (constructor) => {
        console.log("Component decorator called");
        constructor.prototype.options = options;
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertInDOM = () => {
            console.log("Inserting the component in the DOM");
        };
    };
}
function Pipe(constructor) {
    console.log("Pipe decorator call");
    constructor.prototype.pipe = true;
}
let ProfileComponent = class ProfileComponent {
};
ProfileComponent = __decorate([
    Component({ selector: "#my-profile" }),
    Pipe
], ProfileComponent);
function Log(target, methodName, descriptor) {
    const original = descriptor.value;
    if (target && methodName) {
        descriptor.value = function (...args) {
            console.log("Before");
            original.call(this, ...args);
            console.log("After");
        };
    }
}
class Guy {
    say(message) {
        console.log("Guy says " + message);
    }
}
__decorate([
    Log
], Guy.prototype, "say", null);
let guy = new Guy();
guy.say("Hello");
function Capitalize(target, methodName, descriptor) {
    const original = descriptor.get;
    descriptor.get = function () {
        const result = original.call(this);
        return typeof result === "string" ? result.toUpperCase() : result;
    };
}
class Gal {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
__decorate([
    Capitalize
], Gal.prototype, "fullName", null);
let gal = new Gal("Wendy", "Smith");
console.log(gal.fullName);
function MinLength(length) {
    return (target, propertyName) => {
        console.log("target: ", target, "propertyName: ", propertyName);
        let value;
        const descriptor = {
            get() {
                return value;
            },
            set(newValue) {
                if (newValue.length < length)
                    throw new Error(`${propertyName} should be at least ${length} characters long`);
                value = newValue;
            },
        };
        Object.defineProperty(target, propertyName, descriptor);
    };
}
class Operator {
    constructor(password) {
        this.password = password;
    }
}
__decorate([
    MinLength(4)
], Operator.prototype, "password", void 0);
let operator = new Operator("123");
console.log(operator.password);
//# sourceMappingURL=index.js.map