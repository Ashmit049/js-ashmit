let my = new Date()
console.log(my.getDay())
console.log(my.toLocaleString())



let own = new Date(2024, 6, 19, 12, 0, 0)
console.log(own.toDateString())

let own1 = new Date(2024, 6, 19, 12, 0, 0)
console.log(own1.toLocaleString())
 let won2= new Date("11-04-2025")
 console.log(won2.toLocaleString())



 //time
let tt = Date.now()
console.log(Math.floor(tt/1000))

console.log(`Today the day is ${my.getDay()}`)