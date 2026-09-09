const form=document.getElementById("loginForm");
const result=document.getElementById("result");
form.addEventListener("submit",(e)=>{
 e.preventDefault();
 const value=document.getElementById("password").value.trim();
 if(value.toLowerCase()==="batman wl"){
   result.className="result ok";
   result.textContent="ACCESS GRANTED // MEMORY ARCHIVE UNLOCKED.";
   document.getElementById("ending").scrollIntoView({behavior:"smooth"});
 }else{
   result.className="result bad";
   result.textContent="ACCESS DENIED // THAT'S NOT THE PASSWORD. CHECK THE LAST DRAWER.";
 }
});
document.querySelectorAll(".panel").forEach((p,i)=>{
 p.style.animationDelay=(i*45)+"ms";
});
