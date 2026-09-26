/* =========================================
   HIMANSHU PORTFOLIO
   INTERACTION ENGINE
========================================= */


/* PRELOADER */

window.addEventListener("load",()=>{

const loader=document.querySelector(".preloader");

if(loader){

setTimeout(()=>{
loader.classList.add("hide");
},700);

}

});


/* MOBILE MENU */

const menu=document.querySelector(".menu");
const nav=document.querySelector("nav");

if(menu && nav){

menu.addEventListener("click",()=>{

nav.classList.toggle("open");

menu.textContent =
nav.classList.contains("open")
? "×"
: "☰";

});

}


/* REVEAL */

const revealObserver=
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{
threshold:.12
}

);

document
.querySelectorAll(".reveal")
.forEach(el=>{

revealObserver.observe(el);

});


/* CURSOR */

const cursor=
document.querySelector(".cursor");

if(
cursor &&
window.matchMedia("(pointer:fine)").matches
){

window.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

});

document
.querySelectorAll("a,button,[data-tilt]")
.forEach(el=>{

el.addEventListener("mouseenter",()=>{
cursor.classList.add("active");
});

el.addEventListener("mouseleave",()=>{
cursor.classList.remove("active");
});

});

}


/* PROGRESS BAR */

const progress=
document.querySelector(".progress");

function updateProgress(){

if(!progress)return;

const scrollTop=
window.scrollY;

const height=
document.documentElement.scrollHeight
-window.innerHeight;

const percentage=
height>0
? (scrollTop/height)*100
:0;

progress.style.width=
percentage+"%";

}

window.addEventListener(
"scroll",
updateProgress,
{passive:true}
);

updateProgress();


/* PARALLAX */

const parallaxElements=
document.querySelectorAll("[data-parallax]");

function updateParallax(){

const scroll=
window.scrollY;

parallaxElements.forEach(el=>{

const speed=
parseFloat(
el.dataset.parallax
);

const rect=
el.getBoundingClientRect();

if(
rect.bottom>0 &&
rect.top<window.innerHeight
){

const center=
window.innerHeight/2;

const offset=
(rect.top-center)*speed;

el.style.transform=
`translate3d(0,${-offset}px,0)`;

}

});

}

window.addEventListener(
"scroll",
updateParallax,
{passive:true}
);


/* 3D TILT */

const tiltElements=
document.querySelectorAll("[data-tilt]");

tiltElements.forEach(el=>{

el.addEventListener("mousemove",(event)=>{

if(window.innerWidth<=800)return;

const rect=
el.getBoundingClientRect();

const x=
event.clientX-rect.left;

const y=
event.clientY-rect.top;

const rotateY=
((x/rect.width)-.5)*8;

const rotateX=
((y/rect.height)-.5)*-8;

el.style.transform=
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale3d(1.015,1.015,1.015)`;

});

el.addEventListener("mouseleave",()=>{

el.style.transform=
"perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";

});

});


/* MAGNETIC BUTTONS */

document
.querySelectorAll(".magnetic")
.forEach(button=>{

button.addEventListener("mousemove",(event)=>{

if(window.innerWidth<=800)return;

const rect=
button.getBoundingClientRect();

const x=
event.clientX-
(rect.left+rect.width/2);

const y=
event.clientY-
(rect.top+rect.height/2);

button.style.transform=
`translate(${x*.15}px,${y*.15}px)`;

});

button.addEventListener("mouseleave",()=>{

button.style.transform="";

});

});


/* IMAGE DEPTH */

document
.querySelectorAll(".work-card")
.forEach(card=>{

card.addEventListener("mousemove",(event)=>{

if(window.innerWidth<=800)return;

const image=
card.querySelector(".card-image");

if(!image)return;

const rect=
card.getBoundingClientRect();

const x=
(event.clientX-rect.left)/rect.width-.5;

const y=
(event.clientY-rect.top)/rect.height-.5;

image.style.transform=
`scale(1.04)
translate(${x*10}px,${y*10}px)`;

});

card.addEventListener("mouseleave",()=>{

const image=
card.querySelector(".card-image");

if(image){
image.style.transform="";
}

});

});


/* ACTIVE PAGE */

const currentPage=
location.pathname.split("/").pop()
||"index.html";

document
.querySelectorAll("nav a")
.forEach(link=>{

const href=
link.getAttribute("href");

if(href===currentPage){

link.style.opacity="1";

}

});


/* ESCAPE MOBILE MENU */

document.addEventListener("keydown",(event)=>{

if(event.key==="Escape"){

if(nav){

nav.classList.remove("open");

if(menu){
menu.textContent="☰";
}

}

}

});


/* SMOOTH INTERNAL LINKS */

document
.querySelectorAll('a[href^="#"]')
.forEach(link=>{

link.addEventListener("click",(event)=>{

const target=
document.querySelector(
link.getAttribute("href")
);

if(!target)return;

event.preventDefault();

target.scrollIntoView({
behavior:"smooth"
});

});

});
