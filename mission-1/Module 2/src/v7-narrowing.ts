//* "typeof"

let num = "124";

// console.log(typeof num === "string");
// obj, array and null name kono type nai

//*  Type Guard

const print = (value: string | number) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return value;
  }
};

//* Truthiness

type User = {
  name: string;
  address?: {
    street: string;
  };
} | null;

const loggedInUser: User = {
  name: "mir",
  address: {
    street: "AEE",
  },
};

const showAddress = (user: User) => {
  if (user && user.address) {
    console.log(user?.address.street);
    return;
  } else {
    throw new Error("User not found");
  }
};

//* some caveat of type guard
// Todo: mainly type guard golo gejane typeof diya conditon use kore type check kore

// const printAll = (x: string | string[] | null) => {
//   if (x && typeof x === "object") {
//     for (let str of x) {
//       console.log(str);
//     }
//   } else if (typeof x === "string") {
//     console.log(x);
//   } else {
//     console.log("");
//   }
// };

//* Equality
// Todo: Akhane === or !== diya check kore

const printAll = (x: string | string[] | null) => {
  if (x !== null) {
    if (typeof x === "object") {
      for (let str of x) {
        console.log(x);
        return;
      }
    }
    console.log(x);
    return;
  }
  console.log("");
}; //? Equality diya same problem solve kora holo

//* "in" operator

type Bird = { fly: () => void };
type Fish = { swim: () => void };

const move = (animal: Bird | Fish) => {
  if ("fly" in animal) {
    animal.fly();
    return;
  }
  animal.swim();
};

//* "instanceof"  check
//? akta obj kono class ar instance kina ta check korar jonno use hoy

const date = new Date();
const err = new Error("Something was wrong!");

console.log(date instanceof Date);
console.log(err instanceof Error);

const showDate = (x: Date | string) => {
  if (x instanceof Date) {
    console.log(x.toISOString());
    return;
  }

  const date = new Date(x);
  console.log(date.toISOString());
};

showDate("12-16-2026");

//* Discriminated Union

interface Circle {
  kind: "circle";
  redius: number;
}
interface Square {
  kind: "square";
  sideLength: number;
}

const getArea = (shape: Circle | Square) => {
  if (shape.kind === "circle") {
    console.log(shape.redius);
  } else {
    console.log(shape.sideLength);
  }
};
