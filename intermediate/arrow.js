const abc={
    name:"hi",
    price:600,
    welcome:function(){
        console.log(`${this.name}`)
        console.log(this)
    }
}
//abc.welcome()
//abc.name="Ash"
//abc.welcome()
//console.log(this)



function chai()
{
    console.log(this)

}
//chai()





const add=() =>( 5+4)
console.log(add())




