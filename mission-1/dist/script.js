"use strict";
// ts type
const myString = "hello world";
const myNumber = 6516;
const myBoolean = true;
const mySymbol = Symbol();
const myBigInt = 254n;
// Array, Tuple & readonly modifier
//// normal array define
const arr = ["s1", "s2", "s3"]; // with ts
const arrWithTS = ["s1", "s2", "s3"];
const arrNum = [1, 25, 35, 15, 65];
const arrBoolean = [true, false, true, false];
//// now using tuple
const tuple1 = ["abdullah", 155, true];
////  when we use readonly modifier
const readonly1 = [12, 2546, 2000];
//// now you can't push or change any by code
// readonly1.push(3)
