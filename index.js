var randomNumber1=Math.floor((Math.random()*6)+1); //random number between 1-6 for 1st player
var randomNumber2=Math.floor((Math.random()*6)+1); //random number between 1-6 for 2nd player
var randomDicee="dice" + randomNumber1 + ".png"; //random dice1.png - dice6.png for 1st player
var randomDicee2="dice" + randomNumber2 + ".png"; //random dice2.png - dice6.png for 2nd player
var randomImageSource="images/"+ randomDicee; //random images/dice1.png - images/dice6.png for 1st player
var randomImageSource2="images/"+ randomDicee2; //random images/dice1.png - images/dice6.png for 2nd player
var image1 = document.querySelectorAll("img")[0]; //create a variable to select the specified img for player 1
var image2 = document.querySelectorAll("img")[1]; //create a variable to select the specified img for player 2
 image1.setAttribute("src",randomImageSource); //change the attribute value
 image2.setAttribute("src",randomImageSource2); // change the attribute value


 //change the heading for announce the winner
 if(randomNumber1>randomNumber2){                                  //apply condition if 1st player
     document.querySelector("h1").innerHTML="Player 1 wins";      
 }else if(randomNumber2>randomNumber1){                            //apply condition if 2nd player
     document.querySelector("h1").innerHTML="Player 2 wins";
 }else{
     document.querySelector("h1").innerHTML="Tie!"  ;               //If match tie 
 }
