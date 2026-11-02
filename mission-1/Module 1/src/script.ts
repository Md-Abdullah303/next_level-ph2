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



// Optional , default in function 

//// Optional
const thanksForJoining = (name : string, great ?: string ) => {
    return `${name} ${great || "welcome"}`
}

//// default
const great = (name:string, greating : string = "Welcome to NextGen,") => {
    return greating + " " + name
}
console.log(thanksForJoining("abdullah"));



// Rest parameters {akhane ami tuple use korte pari abar naw korte pari}
const rest1 = ( ...arg : [string, string , string, string] ) => {
    return arg
}
console.log(rest1("Apple", "Fun", "Company", "Moja"));



// Object , Type alias and Interface

//// obj
const user : { name : string, phone : string , isActive : boolean} = {
    name : "Jowel vai", 
    phone : "0123456789",
    isActive : true
}


// type

type basicUser = {
    name : string, 
    phone : number, 
    isActive : boolean,
}

type coreUserInfo = {
    address : string,
}

type totalUser = basicUser & coreUserInfo;

const user2 : totalUser = {
    name : "Wazed", 
    phone : 2323, 
    isActive : false,
    address : "nowa khali"
}


// Interface 

interface abdullahBasicInfo {
    name : string, 
    roll : number, 
    collegeActive : boolean,
}

interface abdullahBasicInfo {
    present : number,
}

const abdullahInfo : abdullahBasicInfo = {
    name : "Abdullah",
    roll : 877051,
    collegeActive : true, 
    present : 34,
}



/**
 * At last my montobbo : 
 * 
 * - why typescript are used?
 * - what is the defrent between the TS and JS...
 * - Type of defrent type of value for variable
 * - How to add type in array, obj and function
 * - Tuple, readOnly & Optional , default in function
 * - Type alias and Interface
 */



