// Immediately Invoked Function Expressions (IIFE)

//prevent pollution of the global JS scope



(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')


// if we need two iife function in a file then use ; after one function completed 

//