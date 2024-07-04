const c= document.querySelector("#clock")
setInterval(()=>{
    let date=new Date()
    c.innerHTML=date.toLocaleTimeString()
},1000);