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

class KeyValuePair<T, U> {
  constructor(public key: T, public value: U) {}
}

let pair = new KeyValuePair("1", 0);

class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}
console.log(pair, ArrayUtils.wrapInArray(1));

interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetch<T>(url: string): Result<T> {
  if (url) return { data: null, error: null };
  return { data: null, error: null };
}

interface User {
  username: string;
}

interface Product {
  title: string;
}
let productResult = fetch<Product>("url");
let userResult = fetch<User>("url");
console.log(productResult, userResult);
// interface Man {
//   name: string;
// }

class Man {
  constructor(public name: string) {}
}
class Customer extends Man {}

function echo<T extends Man>(value: T): T {
  return value;
}

// console.log(echo({ name: "adam" }));
console.log(echo(new Customer("adam")));

//=====================
//Passing on generics
//=====================
interface Item {
  name: string;
  price: number;
}
class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }
  get objects() {
    return this._objects;
  }

  // if T is Product
  // keyof T => 'name' | 'price'
  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
}

let store = new Store<Item>();
store.add({ name: "a", price: 1 });
store.find("name", "a");
store.find("price", 1);

// Pass on the Generic
class CompressibleStore<T> extends Store<T> {
  compress() {}
}
let compressed = new CompressibleStore<Item>();

compressed.add({ name: "basketball", price: 20 });
console.log(compressed.objects);

//Restricting Generic
// class SearchableStore<T extends { name: string }> extends Store<T> {
//   override find(name: string): T | undefined {
//     return this._objects.find((obj) => obj.name === name);
//   }
// }

// Terminated Generic
class ProductStore extends Store<Product> {
  filterByCategory(category: string): Product[] {
    if (category) return [];
    return [];
  }
}
console.log(
  new ProductStore().filterByCategory("category")
  //   new SearchableStore().find("name")
);

type ReadOnlyItem = {
  readonly [Property in keyof Item]: Item[Property];
};
type ReadOnly<T> = {
  readonly [Key in keyof T]: T[Key];
};
type Optional<T> = {
  [Key in keyof T]?: T[Key] | undefined;
};

let optionalProduct: Optional<Item> = {
  name: "x",
  price: 5,
};

let product: ReadOnlyItem = {
  name: "a",
  price: 1,
};

let moreFlexibleProduct: ReadOnly<Item> = {
  name: "b",
  price: 10,
};
console.log(product, moreFlexibleProduct, optionalProduct);
