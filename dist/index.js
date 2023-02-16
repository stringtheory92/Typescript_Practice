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
}
class CompressibleStore extends Store {
    compress() { }
}
let compressed = new CompressibleStore();
compressed.add({ name: "basketball", price: 20 });
console.log(compressed.objects);
class SearchableStore extends Store {
    find(name) {
        return this._objects.find((obj) => obj.name === name);
    }
}
class ProductStore extends Store {
    filterByCategory(category) {
        if (category)
            return [];
        return [];
    }
}
console.log(new ProductStore().filterByCategory("category"), new SearchableStore().find("name"));
//# sourceMappingURL=index.js.map