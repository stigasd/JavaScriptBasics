//get ELement by css selectors(querySelectorAll)

 var a =document.querySelectorAll("h1");
 console.log(a);
 //accessing first html
 a[0].innerHTML="change in HTML";


 //using class name

 var b=document.querySelectorAll(".hclass");
 console.log(b);
 b[0].style.color="red";
 
 // using id number

 var a = document.querySelectorAll("#head1");
 console.log(a);
 a[0].innerHTML="change in html using id number";

 //using id

 var c = document.querySelector("#head1");
 console.log(c);
 c.innerHTML="learn java";
