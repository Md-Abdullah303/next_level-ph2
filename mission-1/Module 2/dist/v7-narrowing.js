//* "typeof"
let num = "124";
// console.log(typeof num === "string");
// obj, array and null name kono type nai
//*  Type Guard
const print = (value) => {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        return value;
    }
};
const loggedInUser = {
    name: "mir",
    address: {
        street: "AEE",
    },
};
const showAddress = (user) => {
    if (user && user.address) {
        console.log(user?.address.street);
        return;
    }
    else {
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
const printAll = (x) => {
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
const move = (animal) => {
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
const showDate = (x) => {
    if (x instanceof Date) {
        console.log(x.toISOString());
        return;
    }
    const date = new Date(x);
    console.log(date.toISOString());
};
showDate("12-16-2026");
const getArea = (shape) => {
    if (shape.kind === "circle") {
        console.log(shape.redius);
    }
    else {
        console.log(shape.sideLength);
    }
};
export {};
