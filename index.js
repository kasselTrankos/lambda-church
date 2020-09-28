// ZERO := ƛfx.x 
const ZERO = f => x => x;
// ONCE := ƛfx.fx
const ONCE = f => x => f(x);
// SUCCESSOR := λnfx.f(nfx)
const SUCC = num => f => x => f(num(f)(x));
// I := ƛx.x
const I = x => x;


const ADD = x => x + 1;
const n0 = SUCC(ZERO);
const n1 = SUCC(ONCE);

const TAG = name => value => `<${name}>${value}</${name}>`;

const SPAM = TAG('spam');

console.log('1: ', n0(ADD)(0) );
console.log('ONCE 1: ', n1(ADD)(0) );

console.log('hola spam: ', n0(SPAM)('hola mundo'));
console.log('ONCE hola spam: ', n1(SPAM)('hola mundo'));




