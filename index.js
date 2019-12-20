//Getting Random no. and changing the dice image for player 1

var randomNumber1=Math.floor((Math.random()*6)+1);
var randomDiceImage1="dice"+randomNumber1+".png";
var randomImageSource1="images/"+randomDiceImage1;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource1)

//Getting Random no. and changing the dice image for player 2

var randomNumber2 = Math.floor((Math.random()*6)+1);
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/"+randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

//Anouncing the winner

if(randomNumber1>randomNumber2)
{document.querySelector("h1").innerHTML = "<i class='fas fa-flag'></i> Player 1 wins"}
else if(randomNumber1<randomNumber2)
{document.querySelector("h1").innerHTML= "Player 2 wins <i class='fas fa-flag icon'></i>"}
else
{document.querySelector("h1").innerHTML="Its a Draw"}