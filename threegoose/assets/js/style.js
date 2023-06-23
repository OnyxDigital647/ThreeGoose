window.addEventListener('scroll',function(){
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 1000) {
    navbar.classList.add("sticky");
  } else if (window.scrollY < 100) {
    navbar.classList.remove("sticky", window.scrollY < 100);
  }
  // let offset= window.pageYOffset;
  // console.log("offset"+offset);
})

const navicon = document.getElementById("fa-navicon");

navicon.addEventListener('click',()=>{
 const navlist = document.querySelector(".navlist");
 navlist.classList.toggle("navlistmobile");
})
const navcancle=document.getElementById("navcancle");
navcancle.addEventListener("click", () => {
 document.querySelector('.navlist').classList.remove("navlistmobile");
});


//reavel on scroll

const revealElement = document.querySelectorAll(".animated");
function revealOnScroll(){
for(i=0; i < revealElement.length; i++){
const revealList = revealElement[i];
const reavealPositon = revealList.getBoundingClientRect().top;
 const windowheight = window.innerHeight;
    const reavealPoint=70;
       if (reavealPositon < windowheight - reavealPoint) {
         revealList.classList.add("fadeActive");
       } else {
         revealList.classList.remove("fadeActive");
       }
     }   
}
window.addEventListener("scroll", revealOnScroll);

// back to top btn

window.addEventListener('scroll',()=>{
    let faarrowup = document.getElementById("arrowup");
    if (window.scrollY > 1500) {
      faarrowup.style.visibility = "visible";
      faarrowup.style.opacity = 1;
    } else if (window.scrollY < 100) {
      faarrowup.style.visibility = "hidden";
      faarrowup.style.opacity = 0;
    }
})

//count down timer
var countDownDate=new Date("Jun 10,2024 12:37:25").getTime();
//update the count every 1 seconds
var x= setInterval(function(){
//get todays date and time
var now = new Date().getTime();
//find the distance betwn now and the count down date
var distance = countDownDate-now;
//time calcu for days hours minutes and seconds
var days=Math.floor(distance/(1000*60*60*24));
var hours =Math.floor((distance%(1000*60*60*24))/(1000*60*60));
var minutes=Math.floor((distance%(1000*60*60))/(1000*60));
var seconds=Math.floor((distance%(1000*60))/1000);
//display the countdown
innerDays = document.getElementsByClassName("days");
for(i=0; i< innerDays.length; i++){
    innerDays[i].innerHTML=days;
}
innerHours=document.getElementsByClassName("hours");
for(i=0; i< innerHours.length; i++){
    innerHours[i].innerHTML=hours;
}
innerMinutes=document.getElementsByClassName("minutes");
for(i=0; i< innerMinutes.length; i++){
    innerMinutes[i].innerHTML=minutes;
}
innerSeconds = document.getElementsByClassName("seconds");
for(i=0; i<innerSeconds.length; i++){
    innerSeconds[i].innerHTML=seconds;
}
//if count down end
if(distance < 0){
    clearInterval(x);
    document.getElementById("end").style.visibility="visible";
    document.getElementById("end").innerHTML="EXPIRED";
//update countdown
document.getElementById("days").innerHTML = "-";
document.getElementById("hours").innerHTML = "-";
document.getElementById("minutes").innerHTML = "-";
document.getElementById("seconds").innerHTML = "-";
}
},1000);
//count down end

const tokeninfo=document.getElementById("tokeninfo");
const overlay=document.querySelector(".overlay");
function buytoken(){
    tokeninfo.style.visibility="visible";
    overlay.style.visibility="visible";
    tokeninfo.style.opacity=1;
}

const cancletoken = document.getElementById("cancletoken");
cancletoken.addEventListener("click", () => {
  tokeninfo.style.visibility = "hidden";
  overlay.style.visibility = "hidden";
  tokeninfo.style.opacity = 0;
});
const lastpayment = document.getElementById("lastpayment");
document.getElementById("confirmpayment").addEventListener("click",function(){
    lastpayment.style.visibility="visible";
    lastpayment.style.opacity="1";
    overlay.style.visibility = "visible";
    tokeninfo.style.visibility = "hidden";
})

const canclepayment = document.getElementById("canclepayment");
canclepayment.addEventListener('click',()=>{
     lastpayment.style.visibility = "hidden";
    lastpayment.style.opacity="0";
    overlay.style.visibility = "hidden";
    tokeninfo.style.visibility = "hidden";
})
//nav bar
const qbtn1=document.getElementById('qbtn1');
const q2txt = document.getElementById("q2");
const q3txt = document.getElementById("q3");
const q4txt = document.getElementById("q4");
const q5txt = document.getElementById("q5");
const q1 = document.querySelectorAll(".q2")[0];
q1.addEventListener("click", () => {
  q2txt.style.display = "block";
  q3txt.style.display = "none";
  q4txt.style.display = "none";
  q5txt.style.display = "none";
  qbtn1.classList.remove("q2active");
  qbtn2.classList.remove("q2active");
  q1.classList.add("q2active");
});
qbtn1.addEventListener("click", () => {
  q3txt.style.display = "block";
  q2txt.style.display = "none";
  q4txt.style.display = "none";
  q5txt.style.display = "none";
qbtn1.classList.add("q2active");
qbtn2.classList.remove("q2active");
q4.classList.remove("q2active");
  q1.classList.remove("q2active");


  })
const qbtn2 = document.getElementById("qbtn2");
qbtn2.addEventListener("click", () => {
  q4txt.style.display = "block";
  q2txt.style.display = "none";
  q3txt.style.display = "none";
  q5txt.style.display = "none";
qbtn1.classList.remove("q2active");
qbtn2.classList.add("q2active");
q4.classList.remove("q2active");
  q1.classList.remove("q2active");

});
const q4 = document.querySelectorAll(".q2")[3];
q4.addEventListener("click", () => {
  q5txt.style.display = "block";
  q4txt.style.display = "none";
  q2txt.style.display = "none";
  q3txt.style.display = "none";
qbtn1.classList.remove("q2active");
qbtn2.classList.remove("q2active");
q4.classList.add("q2active");
  q1.classList.remove("q2active");


});