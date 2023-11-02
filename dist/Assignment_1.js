"use strict";
let printInConsole = function (...paras) {
    paras.forEach((ele) => {
        console.log(`The Value is ${ele} And the Type is ${typeof ele}`);
    });
    return 'Done';
};
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));
//# sourceMappingURL=Assignment_1.js.map