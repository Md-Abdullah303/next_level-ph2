//* IIFE - Immediately Invoked Function Expression
// js a kono function make koreii take use korar dorkar hoy tokhonoii amra ata use kori

/**
 * sentax ;
 * (()=> {
 *   code there
 * })();
 */

//! we can't use like this ;
// var a = 10;
// var a = 100;
// console.log(a); //? we want 10 and 100 in same variable

(() => {
  var a = 10;
  console.log(a);
})();

(() => {
  var a = 100;
  console.log(a);
})();

//*for function
//! we can't use Function like this ;
// function f1() {
//     console.log("Rahim");
// }
// f1()
// function f2 () {
//     console.log("Habib");
// }
// f1()

(() => {
  function f1() {
    console.log("Rahim");
  }
  f1();
})();

(() => {
  function f1() {
    console.log("Habib");
  }
  f1();
})();
