var n1=  Math.floor(Math.random()*6)+1;
var dice1="dice"+n1+".png";
var randomImageSource1="images/"+dice1;
var image1=document.querySelector(".img1");
image1.setAttribute("src",randomImageSource1);

var n2=  Math.floor(Math.random()*6)+1;
var dice2="dice"+n2+".png";
var randomImageSource2="images/"+dice2;
var image2=document.querySelector(".img2");
image2.setAttribute("src",randomImageSource2);
if(n1>n2){
    document.querySelector("h1").innerHTML="PLAYER 1 WINS!"
}
else if(n1<n2){
    document.querySelector("h1").innerHTML="PLAYER 2 WINS!"
}
else if(n1===n2){
    document.querySelector("h1").innerHTML="DRAW!"
}
