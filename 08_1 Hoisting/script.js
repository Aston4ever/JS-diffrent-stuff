'use strict';
console.log(me)
// console.log(job)
// console.log(year)

var me = 'Aston';
let job = 'teacher';
const year = 1991;

console.log(add(2,3))
console.log(addExpr(2,3))
console.log(arrow(2,3))

function add(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
}

const arrow = (a, b)=> a + b;