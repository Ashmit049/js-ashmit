const cc=function(){
    const hex='0123456789ABCDEF'
    let color='#'
    for(let i=0;i<6;i++)
    {
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color
}
let interval
function start()
{
    if(!interval)
    interval=setInterval(chnage,1000)
    function chnage()
    {
        document.body.style.backgroundColor=cc()
    }
}


function stopc(){
    clearInterval(interval)
    interval=null
}
document.querySelector("#start").addEventListener('click',start)
document.querySelector("#stop").addEventListener('click',stopc)