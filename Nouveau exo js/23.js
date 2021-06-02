  let  tweet;                                                    

function caracter() {                                    
  let textEntered, countRemaining, counter;     
  /* 3 variable pour chaque instruction  */     
  textEntered = document.getElementById('tweetContent').value;  
   /* getElementById pour viser l'id pour avoir toute les chaine */
  counter = (140 - (textEntered.length));
  /* longueur de caractair*/
  countRemaining = document.getElementById('counterBlock'); 
    /* cybler le black des caractaire */
  countRemaining.textContent = counter;       

    /*verification quand il et inferieur a zero il mes le counterBlock en rouge*/

  if(counter < 0){
    document.getElementById("counterBlock").style.color="red";
  }
  else if(counter > 0){
    document.getElementById("counterBlock").style.color="black";
  }
   
}  /*verification quand il et supperieur  a zero  il mes le counterBlock en noir*/

    tweet = document.getElementById('tweetContent');      

    tweet.addEventListener('keyup', caracter, false);
   /* l'evenemet keyup est declencher l'orqu'une touche et relacher */
 