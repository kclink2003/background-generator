var css= document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body= document.getElementById("gradient");
let enterb=document.getElementById("enter");
let h=document.getElementById("h");


function setGradient(){

	body.style.background="linear-gradient(to right, "+color1.value+", "+color2.value+")";
	css.textContent=body.style.background + ";"
}

color1.addEventListener("input", setGradient);


color2.addEventListener("input",setGradient);

enterb.addEventListener('click', function(){
	h.innerHTML="I am learning git";
	h.style.font="35px";
})