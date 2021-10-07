const a = 'this is a variable';
const b = 37;
const c = true;
let d;
const e = null;
const f  = Symbol('integer');
const g = Symbol('float');


// expected output: true

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e)
console.log(typeof f)

const allTypes = {};

allTypes[a]= 'a';
allTypes[b]= 'b';
allTypes[c]= 'c';
allTypes[d]= 'd';
allTypes[e]= 'e';
allTypes[f]= 'integer';
allTypes[g]= 'float';

console.log(typeof allTypes[f]);

console.table(allTypes);

console.log(JSON.stringify(allTypes))

console.log('---Start Iteration---');


for (const type of Object.keys(allTypes)) {
    console.log(type)
}

console.log('---End iteration---');

if(f !== g) {
    console.log('Symbols are not equals')
}

console.log(Object.getOwnPropertyNames(allTypes))

console.log(Object.getOwnPropertySymbols(allTypes))

console.log(allTypes[Object(f)])

console.log(allTypes[Object(g)])