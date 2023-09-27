let element=document.body.querySelector('.main')
let icon=document.querySelector('#c')

element.addEventListener('mousemove',(data)=>{
   let x=(data.x-8)+"px"
   let y=(data.y-8)+"px"
   icon.style.left=x
   icon.style.top=y
})

