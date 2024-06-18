const a1=[1 , 2 ,2, 23 ,5]
const a2 =[4,5,5,5]
//a1.push(a2)
//console.log(a1)

const a3 = a1.concat(a2)
console.log(a3)



const a4 =[...a1, ...a2]
console.log(a4)




const aa=[1, 2 , [3 ,4] , 5,[6,[7,8]]]
const bb = aa.flat(Infinity)
console.log(bb)



console.log(Array.isArray("Hello"))



let q =1
let w = 2
let r =3
console.log(Array.of(q,w,r))