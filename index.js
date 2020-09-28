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

// ADD := ƛnk.n(SUCC)k
const ADD = n => k => n(SUCC)(k);
// B := λab.a∘b = compose
const B = a => b => x =>a(b(x));

// MULT := λab.a∘b = compose
const MULT = B;

// NOT := ƛb.bFT
const NOT = b => b(F)(T)

// AND := ƛpq.pTq
const AND = p => q => p(q)(F);


// OR := ƛpq.pT.q
const OR = p => q => p(T)(q);

// I := ƛx.x
const I = x => x;
const obj = {a: 1, b: 2};
const names = obj => Object.getOwnPropertyNames(obj);

// is0 : = ƛn.n(KF)T
const is0 = n => n(K(F))(T);


const SUM = x => x + 1;
const n0 = ZERO;

const n1 = SUCC(n0);
const n2 = SUCC(n1);
const n3 = SUCC(n2);
const n4 = SUCC(n3);


const jsnum = n => n(x => x + 1)(0);
const jstag = n => n(x =>  `<spam>${x}</spam>`)('hoila');
const KEYS = ONCE(names)(obj);

const TAG = name => value => `<${name}>${value}</${name}>`;
const SPAM = TAG('spam');
const DIV = TAG('div')
const INSIDE = m => f => x =>  m(f(x));// y=> y//console.log(y) || f((TAG)(x)(y));
const _spam = INSIDE(SPAM);
const _p = INSIDE(TAG('p'));
const _pspam = SUCC(_spam)(TAG('p'));
const h = SUCC(DIV);
const _s = SUCC(_p)(DIV);
const _m =B(TAG('body'))(TAG('header'));
const t0 = B(DIV)(_m)('hola miunbd');
const t1 = TAG('html')(t0 + '0000')
console.log(t1);

const a1 = ADD(TAG('html'))

console.log(SUCC(OR(I)(x => x + '0dddd'))(TAG('op'))(t0))
// console.log(INSIDE(x=> x +'1')('span'))
// console.log(INSIDE(DIV)('p')(0));

// console.log(INSIDE(SPAM)(TAG('div'))('jop'))


// console.log('im zero ', jsnum(n0));
// console.log('im zero ', jsnum(n0));
// console.log('im zero 2 ', jsnum(n2));
// console.log('im zero 3 ', jsnum(n4));

// console.log(' SUMO n3 + n4 = n7', jsnum(ADD(n3)(n4)));
// console.log(' SUMO n3 x n4 = n12', jsnum(MULT(n3)(n4)));

// console.log(jstag(ADD(n3)(n1)));
// console.log(is0(n1))
// console.log(B(SPAM)(I)(9))


// var t = 0 ? 'd':'f';
// console.log(T(1)(3));
// console.log(F(1)(3));


// console.log('ADD 0 + 2 ', jsnum(ADD(n2)(n1)) );
// console.log('MULT 3 x 3 ', jsnum(MULT(n3)(n3)) );

// console.log('ONCE 1: ', SUCC(jsnum(n1)));

// console.log('hola spam: ', n0(SPAM)('hola mundo'));
// console.log('ONCE hola spam: ', n1(SPAM)('hola mundo'));

// console.log('K 1: ', K(1)(0));
// console.log('K 11: ', K(11)(10));
// console.log('K I:', K(I)(11)(10));
// console.log(ONCE(names)(obj));
// const _or = OR(F)(T);
// const _and = AND(F)(T);

// const _not = NOT(_or);
// const _not_and = NOT(_and);

// console.log('OR: ', _or(9)(19));
// console.log('AND: ', _and(9)(19));
// console.log('OR NOT: ', _not(9)(19));
// console.log('AND NOT: ', _not_and(9)(19));
// console.log(SUCC(SUCC(ONCE))(NOT)(T))
// console.log(jsnum(n0), '1 0000')
// console.log(jsnum(n1), '2 0000')
// console.log(jsnum(ADD(n3)(n1)))






