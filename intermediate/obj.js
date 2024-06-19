const a= Symbol("hi")
const j={
    name: "Ashmit",
    age:15,
    [a]:"hi"
}
console.log(j.name)
console.log(j[a])

j.hee=function(){
    console.log(`hello ${this.name}`)
}
console.log(j.hee())

console.log(j)