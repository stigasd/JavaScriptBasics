

//DoM create and Remove elements

var heading = document.createElement("h1");

function create(){
    heading.innerHTML="Hello World";
    //to bring element inside body
    document.body.appendChild(heading);
}

function remove()
{
   heading.remove(); 
}