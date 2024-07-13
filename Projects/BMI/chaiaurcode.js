const a=document.querySelector("form")
a.addEventListener("submit", (e)=> {
    e.preventDefault()
    const h=Number(document.querySelector("#height").value)
    const w=Number(document.querySelector("#weight").value)
    const r=document.querySelector("#results")
    if(h=="" || h===0 || h==NaN)
    {
        r.innerHTML="Please give a valid height"
    }
    else if(w=="" || w==0 || w==NaN)
        {
            r.innerHTML="Please give a valid height"
        }
    else
    {
        const bmi=(w/((h*h)/1000)).toFixed(2)
        r.innerHTML=`<span>${bmi}</span>`
    }
})
