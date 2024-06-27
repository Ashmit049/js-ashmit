const code=["h","i","j"]
code.forEach(function(item){
    console.log(item)
});

code.forEach((val)=>{
    console.log(val)
})
//third method
function hello(item){
    console.log(item)

}
code.forEach(hello)




// array with objects
const cod=[
    {
     name:"js",
     file:"jjs"
            },
    {
    name:"python",
    file:"py"
            }
]
cod.forEach(function(ite){
    console.log(ite.file)
})