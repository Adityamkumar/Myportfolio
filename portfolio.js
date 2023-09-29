let tl=gsap.timeline();
tl,
tl.from("ul",{
    x:-100,
    duration:2,
    opacity:0.3,
})
tl.from(".center-txt",{
    y:150,
    duration:2,
    opacity:0,
})
tl.from("#me",{
    y:100,
    duration:2,
    opacity:0,
})
tl.from("#About-me",{
    y:100,
    duration:1,
    opacity:0,
})
tl.from("#sm-txt",{
    y:50,
    duration:2,
    opacity:0,
})
tl.from(".info button",{
    y:100,
    duration:2,
    opacity:0,
})


let typed = new Typed(".auto-text", {
    strings: ["Video Editor", "Web Designer", " Web Devloper"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  })

  let type = new Typed(".dynamic-text", {
    strings: ["Educational Website", "Using HTML CSS","Javascript"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  })
  let type3 = new Typed(".dynamic-text2", {
    strings: ["Food Delivery Website", "Using HTML CSS ","Javascript"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  })

 function submitfunction(){
 
    alert("Successfully Send")
 }
 document.querySelector("#cv").addEventListener("click",function(){
  alert("Progress....")
 })

 let main=document.querySelector("#main");
 let crsr=document.querySelector(".cursor")
 main.addEventListener("mousemove",function(dets){
  crsr.style.left=dets.x +"px"
  crsr.style.top=dets.y + "px"
 })
 
 let btn=document.querySelector(".moon");
 let img=document.querySelector("#r-img")
  let body=document.querySelector("body");
  let check=0
 btn.addEventListener("click",function(){
  if(check==0){
   body.style.backgroundColor="#222121"
   body.style.color="white"
   this.style.color="royalblue"
   check=1
  }else{
    body.style.backgroundColor="white"
    body.style.color="black"
    this.style.color="white"
    check=0;
  }
 })
 
 
 
