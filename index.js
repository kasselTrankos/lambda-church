// ZERO := ƛfx.x 
const ZERO = f => x => x;
// T = K := ƛxy.x
const K = x => y => x;
// T := ƛxy.x
const T = x => y => x;

// F = KI : = ƛxy.y
const KI = x => y => y;
// F : = ƛxy.y
const F = x => y => y;
// ONCE := ƛfx.fx
const ONCE = f => x => f(x);
// SUCCESSOR := λnfx.f(nfx)
const SUCC = num => f => x => f(num(f)(x));

// NOT := ƛb.bFT
const NOT = b => b(F)(T)

// AND := ƛpq.pTq
const AND = p => q => p(q)(F)

// OR := ƛpq.pT.q
const OR = p => q => p(T)(q);

// I := ƛx.x
const I = x => x;
const obj = {a: 1, b: 2};
const names = obj => Object.getOwnPropertyNames(obj);


const ADD = x => x + 1;
const n0 = SUCC(ZERO);
const n1 = SUCC(ONCE);
const n2 = SUCC(n1);
const n3 = SUCC(n2);
const n4 = SUCC(n3);


const jsnum = n => n(x => x + 1)(0)

const TAG = name => value => `<${name}>${value}</${name}>`;

const SPAM = TAG('spam');
const KEYS = ONCE(names)(obj);

console.log('1: ', n0(ADD)(0) );
console.log('ONCE 1: ', n1(ADD)(0) );

console.log('hola spam: ', n0(SPAM)('hola mundo'));
console.log('ONCE hola spam: ', n1(SPAM)('hola mundo'));

console.log('K 1: ', K(1)(0));
console.log('K 11: ', K(11)(10));
console.log('K I:', K(I)(11)(10));
console.log(ONCE(names)(obj));
const _or = OR(F)(T);
const _and = AND(F)(T);

const _not = NOT(_or);
const _not_and = NOT(_and);

console.log('OR: ', _or(9)(19));
console.log('AND: ', _and(9)(19));
console.log('OR NOT: ', _not(9)(19));
console.log('AND NOT: ', _not_and(9)(19));
console.log(SUCC(SUCC(ONCE))(NOT)(T))
console.log(jsnum(SUCC(ZERO)), '0000')
console.log(jsnum(n4), '0000')






