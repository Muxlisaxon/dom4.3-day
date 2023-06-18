let cursor = document.querySelector('.cursor')
let btn = document.querySelector('.btn')
let f = document.querySelector(".f")
let s = document.querySelector(".s")

document.addEventListener("mousemove",(event)=>{
    s.innerHTML=cursor.style.left = event.pageX + "px"
    f.innerHTML=cursor.style.top  = event.pageY + "px"
    cursor.style.display = "block"
})