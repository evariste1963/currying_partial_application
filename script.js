function add(a, b, c, d) {
  return a + b + c + d;
}

function product(a, b, c) {
  return a * b * c;
}

function subtract(a, b, c, d, e, f) {
  return a - b - c - d - e - f;
}

function quotient(a, b) {
  return a / b;
}

//fn declaration
function partialFn(fn, ...args) {
  return function (...moreArgs) {
    //anonymous fn
    console.log(fn(...args, ...moreArgs));
    return fn(...args, ...moreArgs); //returning the fn call
  };
}

//arrowFn
const partialFn1 =
  (fn, ...args) =>
  (...moreArgs) => {
    console.log(fn(...args, ...moreArgs));
    fn(...args, ...moreArgs);
  };

const fnCall = partialFn1(add, 6, 2);
fnCall(8, 4); //20

const fnCall1 = partialFn1(product, 2);
fnCall1(3, 4); //24

const fnCall2 = partialFn(add, 12, 16);
fnCall2(8, 4); //40

const fnCall3 = partialFn1(product, 6);
fnCall3(7, 8); //336

const fnCall4 = partialFn1(subtract, 12, 1, 2);
fnCall4(8, 4, 16); //-19

const fnCall5 = partialFn(subtract, 66, 10);
fnCall5(7, 8, 4, 12); //25

const fnCall6 = partialFn(quotient, 666);
fnCall6(10).toFixed(3); //66.6
