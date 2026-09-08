// Replace this with your actual Microsoft Form URL if the hunt continues into a form.
const MICROSOFT_FORM_URL = "";

function unlock(){
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const msg = document.getElementById("loginMessage");

  // The comic gives the visible password clue as "BAtman wl".
  // Keep the login intentionally playful rather than using it for real authentication.
  if(pass.toLowerCase().replace(/\s+/g,"") === "batmanwl"){
    msg.textContent = "PASSWORD ACCEPTED.";
    msg.style.color = "#5cff85";
    document.getElementById("reveal").classList.remove("hidden");
    if(MICROSOFT_FORM_URL){
      document.querySelector(".form-link").href = MICROSOFT_FORM_URL;
      document.querySelector(".form-link").onclick = null;
    }
    setTimeout(()=>document.getElementById("reveal").scrollIntoView({behavior:"smooth",block:"center"}),250);
  }else{
    msg.textContent = "ACCESS DENIED — LOOK CLOSER, DETECTIVE.";
    msg.style.color = "#ff4a4a";
  }
}
