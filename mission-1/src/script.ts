// ts type

const myString : string = "hello world";
const myNumber : number = 6516;
const myBoolean : boolean = true;
const mySymbol : symbol = Symbol();
const myBigInt : bigint = 254n;


// Array, Tuple & readonly modifier

//// normal array define
const arr = ["s1", "s2", "s3"] // with ts
const arrWithTS : string[] = ["s1", "s2", "s3"]
const arrNum : number[] = [1,25,35,15,65]
const arrBoolean : boolean[] = [true, false, true, false]

//// now using tuple
const tuple1 : [string, number, boolean] = ["abdullah", 155, true]

////  when we use readonly modifier
const readonly1 : readonly number[] = [12, 2546, 2000]

//// now you can't push or change any by code
// readonly1.push(3)




