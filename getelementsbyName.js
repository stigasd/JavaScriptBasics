var a=document.getElementsByName("text")[0];
console.log(a);
var b=document.getElementById("head1");

function message()
{
 b.innerHTML="Hello"+a.value;   
}