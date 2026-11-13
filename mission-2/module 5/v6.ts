//* Single-Thread vs Multithreaded Server

// limitation of Multithreaded server
// Multithreaded server ar cons holo ;
// akhane kono thread ar besi kaj aisa porle ata ke w8 korte hobe
// ja thik korar jonno amra scaling kore thaki and ata 2 prokar :
//? Horizontal Scaling
// add instance
//? Vartical Scaling
// Increase the size (CPU, RAM)

// Todo : So how node.js work with multithreaded work bcz it's a single Threaded
// Node.js ar kase kono sort kaj asle ta se anek easily kore fele but zdi kono long work ase , taile se kaj take korte diye Thread Pool a rakhe , amne all long work thread pool a rakhar fole kaj running obosthatei w8 o kore + kaj sesh hole node.js take abar client ar kase send o kore dey

//! Limits of Node.js
// node.js is not suitable for heavy cpu intensive tasks.
//? atar somadhan hocche Multithread use make kora or jonno
