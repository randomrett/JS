// Immediately Invoked Function Expression

(function chai(){               // Named IIFE
    console.log(`DB connected`)
})();                   // this semicolon is necessary when writing more than one IIFE to execute code

((system) => {                  // Unnamed IIFE
    console.log(`DB2 connected to ${system}`)
})('mdnHub')