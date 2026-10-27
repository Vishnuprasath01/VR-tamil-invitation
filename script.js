(() => {
  "use strict";
  const weddingMoment = new Date("2026-11-22T07:45:00+05:30").getTime();
  const $ = id => document.getElementById(id);
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
    for (let i=0;i<5;i++){const h=document.createElement("span");h.className="floating-heart";h.textContent="♥";h.setAttribute("aria-hidden","true");h.style.left=`${10+i*19}%`;h.style.animationDuration=`${14+(i%5)*2}s`;h.style.animationDelay=`${-i*3.2}s`;h.style.fontSize=`${11+(i%4)*3}px`;document.body.appendChild(h);}
    for(let i=0;i<10;i++){const p=document.createElement("span");p.className="petal";p.setAttribute("aria-hidden","true");p.style.left=`${(i*37+11)%100}%`;p.style.animationDuration=`${15+(i%5)*2}s`;p.style.animationDelay=`${-(i*2)%15}s`;document.body.appendChild(p);}
  }
  function updateCountdown(){const diff=weddingMoment-Date.now();if(diff<=0){$("countdown").innerHTML="<p>எங்கள் இனிய வாழ்க்கை தொடங்கிவிட்டது ♡</p>";return;}
    $("days").textContent=String(Math.floor(diff/86400000)).padStart(2,"0");
    $("hours").textContent=String(Math.floor(diff%86400000/3600000)).padStart(2,"0");
    $("minutes").textContent=String(Math.floor(diff%3600000/60000)).padStart(2,"0");
    $("seconds").textContent=String(Math.floor(diff%60000/1000)).padStart(2,"0");}
  updateCountdown();setInterval(updateCountdown,1000);
  const items=document.querySelectorAll(".reveal");
  if("IntersectionObserver" in window){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target);}}),{threshold:.12});items.forEach(x=>observer.observe(x));}else items.forEach(x=>x.classList.add("visible"));
  const audio=$("weddingAudio"),screen=$("welcomeScreen");audio.volume=.75;
  $("openInvitationBtn").addEventListener("click",async()=>{document.body.classList.add("invitation-opening");window.scrollTo({top:0,left:0,behavior:"instant"});screen.classList.add("opening");try{await audio.play();}catch(e){console.log("இசையைத் தொடங்க முடியவில்லை:",e);}setTimeout(()=>{screen.style.display="none";document.body.classList.remove("invitation-opening");document.body.style.overflowY="auto";document.documentElement.style.overflowY="auto";document.documentElement.style.scrollBehavior="auto";},850);});
  document.addEventListener("visibilitychange",async()=>{if(document.hidden)audio.pause();else{try{await audio.play();}catch(e){console.log("இசையை மீண்டும் தொடங்க முடியவில்லை:",e);}}});
  const share=`விஷ்ணு பிரசாத் மற்றும் ரிதன்யாவின் திருமணத்திற்கு அன்புடன் அழைக்கிறோம்!\n\nவரவேற்பு: 21 நவம்பர் 2026, மாலை 6:00 மணி முதல்.\nமுகூர்த்தம்: 22 நவம்பர் 2026, காலை 7:45–8:45.\n\nமண்டபம்: விவாஸ் மஹால், தாராபுரம் சாலை, பெரியகுளம் பிரிவு.`;
  $("shareInvite").addEventListener("click",e=>{e.preventDefault();window.open(`https://wa.me/?text=${encodeURIComponent(share+"\n\n"+location.href)}`,"_blank","noopener,noreferrer");});
})();