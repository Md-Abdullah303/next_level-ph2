//* Top types
let helloWorld = "any";
helloWorld = 34;
const something = "hello world";
helloWorld.length;
// something.length; //! we don't use it
//* Core types
let something2;
const num = 23;
something2 = num;
const currentUser = null;
//*Unit type - void
const greet = () => {
    console.log("Hello World");
};
greet();
//* Sub-type of unit type
const anotherGreet = () => {
    console.log("Hello World");
};
anotherGreet();
//* Bottom type
const getError = (msg) => {
    throw new Error(msg);
};
const z = getError("sss");
export {};
