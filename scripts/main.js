/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to 
   write your logic.
*/


function handValue (hand) {
 
  var aceCard = [];
  
  for (i = 0; i < hand.length; i++) {
    while (hand[i] === "A") {
      hand.splice(i,1);
      aceCard.push("A");
    }
  }  
  var sorted = hand.concat.apply(hand, aceCard);
  
  var total = 0;
  var hand = [];
  var royal = ["J","Q","K"];
  
  for (i=0; i < sorted.length; i++){
    if (sorted[i] <= 10) {
      hand.push(parseInt(sorted[i]));
    }
    else if (royal.indexOf(sorted[i]) >= 0) {
      hand.push(10);
    }
    else { 
      if (11 <= (21-total) && sorted.lastIndexOf("A") == i) {
        hand.push(11); 
      }
      else {
        hand.push(1); 
      } 
    } 
    getTotal(hand);
  } 
  function getTotal(hand){
    total = 0;
    for (j = 0; j < hand.length; j++) {
      total = total + hand[j];
    }  
  }
  console.log(total);
  return total;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/