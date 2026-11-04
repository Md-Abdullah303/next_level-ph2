//* Top types

let helloWorld: any = "any";
helloWorld = 34;

const something: unknown = "hello world";
helloWorld.length;
// something.length; //! we don't use it

//* Core types

let something2: unknown;
const num: number = 23;
something2 = num;

//* Nullish types

interface User {
  name: string;
}
type LoggedInUser = User | null;
const currentUser: LoggedInUser = null;

//*Unit type - void

const greet = () => {
  console.log("Hello World");
};

greet();

//* Sub-type of unit type

const anotherGreet = (): undefined => {
  console.log("Hello World");
};

anotherGreet();

//* Bottom type

const getError = (msg: string) => {
  throw new Error(msg);
};

const z: bigint = getError("sss");
