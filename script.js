const btn=document.getElementById('btn');
console.log(btn);
const nav=document.querySelector('.show');
console.log(nav);
btn.addEventListener('click',()=>{
    
  if(nav.classList.contains('hidden'))
  { 
    nav.classList.remove("hidden");
  }
  else{
    nav.classList.add("hidden");
  }
})