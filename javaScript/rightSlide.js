
// code for click and slide right function
var bar = document.querySelector(".bar");
var aside = document.querySelector(".aside");
var main = document.querySelector(".main");
var direction = document.querySelector(".direction");
var side = document.querySelector(".side");

var eventt= document.getElementById("move").addEventListener("click", control);
function control(){
    bar.style.visibility = "hidden";
    aside.style.width = "25vmax";
    direction.style.width = "25vmax";
    main.style.width = "75vmax";
    side.style.width = "40vmax";
    aside.style.transition = "all 1s";
    bar.style.transition = "all 1s";
    direction.style.transition = "all 1s";
    main.style.transition = "all 1s";
    
    
    return false;
}

document.getElementById('move').addEventListener('click', close); // this click event element is a red bar, 
																	//should be an input of checkbox,
																  // then style the check state of the checkbox. See the code below. I have deadlines but u understand ur approach better

function close(){
	if(aside.style.width == "25vmax"){
	   aside.classList.toggle("aside")	
	   main.classList.toggle("main")	
      side.classList.toggle("side")		   
	}
	
}

/*
function close(){
	if(move == "checked"){
	   aside.classList.toggle("aside")	
	   main.classList.toggle("main")	
      side.classList.toggle("side")		   
	}
	
}

*/
