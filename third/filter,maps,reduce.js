const ex=[1,2,3,4,5]
const ob=ex.filter((num)=>num>4)
console.log(ob)

//2nd mehtod
const n=ex.filter((n)=> n>4)
console.log(n)

//same example using for each

const s1=[]
const o=ex.forEach((n1) => {
    if(n1>4)
    s1.push(n1)
})
console.log(s1)




//real life example of filter
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
  let o2=books.filter((n4) => n4.genre==="Fiction")
  o2=books.filter((n4) => n4.genre==="Fiction" && n4.edition>2004)
  console.log(o2)




//maps
const n2=[1,2,3,4,5,6]
let cc=n2.map((n3)=>n3+5)
console.log(cc)



//chaining maps and filter

const j1=n2.map((m1)=> m1*10).map((m1)=> m1+1).filter((m1)=> m1>20)
console.log(j1)



//reduce
const ex2=n2.reduce(function (acc,curr)
{
    return acc+curr
},0)
console.log(ex2)

const ex3=n2.reduce((acc,curr)=> acc+curr,0)
console.log(ex3)

//real life use of reduce

const arr=[
    {
        name:'javascript',
        price:2000
    },
    {
        name:"java",
        price:1000

    }


]
const t=arr.reduce((acc,cur)=> acc+cur.price,0)
console.log(t)
