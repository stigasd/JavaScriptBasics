

//DOM add events

var heading= document.getElementById("header");
var btn = document.getElementById("btn");

btn.addEventListener("click",changecolour);

heading.addEventListener("mouseover",backgroundchange);

function changecolour()
    {
heading.style.color="blue";
    }

function backgroundchange()
{
heading.style.backgroundColor="yellow";

}    

