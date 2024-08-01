const button=document.querySelectorAll(".button");
button.forEach((e)=>{
  e.addEventListener('click',function(ev){
    if(ev.target.id==="blue"){
      e.parentElement.parentElement.style.backgroundColor=`${ev.target.id}`;
    }
    if(ev.target.id==="grey"){
      e.parentElement.parentElement.style.backgroundColor=`${ev.target.id}`;
    }
    if(ev.target.id==="yellow"){
      e.parentElement.parentElement.style.backgroundColor=`${ev.target.id}`;
    }
    if(ev.target.id==="white"){
      e.parentElement.parentElement.style.backgroundColor=`${ev.target.id}`;
    }
  })
})
