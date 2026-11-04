//* type alias vs interface

//? Interface is generally connected to objects
//? type alias is more connected to literals, unions, tuples, primitives

// Todo: why we use Interface?
/**
 * Ans : Primitive dos't allow ,extend allow, Union dos't allow
 * - interface same namer ar interface marge hoiya jay
 */

// Todo : Why we use Type?
/**
 * Ans : Primitive allow, Union use allow
 * - AMRA type redeclayer korte pari na
 * */

type Id = number;
//! interface id = number

type Role = "admin" | "member";
//! interface "admin" | "member"
// how can we do it?

interface User {
  name: string;
  id: Id;
  role: "admin" | "member";
}

const user: User = {
  name: "abdullah",
  id: 343,
  role: "admin",
};

//Todo: interface

interface Animal {
  species: string;
}

interface Cat extends Animal {
  breed: string;
}

const cat: Cat = {
  breed: "Persian",
  species: "Felix",
};

// now amra type diya ata korar try kori

type Vehicle = {
  brand: string;
};
type Car = Vehicle & {
  // `&` use for intersection
  model: string;
};

const car: Car = {
  model: "corolla",
  brand: "blah",
};
