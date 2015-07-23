console.log("Welcome to Cee-Lo!");

var die = 0;
var player1 = [], computer = [];
var diceFace = ['\u2680', '\u2681', '\u2682', '\u2683', '\u2684', '\u2685'];

function roll(player, numDice){
 for (var i = 0; i < numDice; i++) {
 die = Math.ceil(Math.random()*6);
 player.push(die);
 }
}
roll(computer, 3);
roll(player1, 3);

// player1 = [1,1,1];
// computer = [1,2,3];
//

console.log("The computer rolled " +computer);
console.log("You rolled "+ player1);

function sum(array) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    count = count + array[i];
  }
  return count;
}

function winStraight(array) {
for (var i = 0; i < array.length; i++) {
  if (array[0] === 4 || array[1] === 4 || array[2] === 4 ){
    if(array[0] === 5 || array[1] === 5 || array[2] === 5 ){
      if(array[0] === 6 || array[1] === 6 || array[2] === 6 ){
        return true;
      }
    }
  }
}
}

function loseStraight(array) {
for (var i = 0; i < array.length; i++) {
  if (array[0] === 1 || array[1] === 1 || array[2] === 1 ){
    if(array[0] === 2 || array[1] === 2 || array[2] === 2 ){
      if(array[0] === 3 || array[1] === 3 || array[2] === 3 ){
        return true;
      }
    }
}
}
}

if(winStraight(player1 )){
console.log("You win!");
} else if (winStraight(computer)){
  console.log("The computer wins.");
} else if (loseStraight(player1)) {
  console.log("The computer wins.");
}else if (loseStraight(computer)) {
  console.log("You win!");
}else if
(sum(player1) > sum(computer)){
console.log("You win!");
}else if (sum(computer) > sum(player1)){
   console.log("The computer wins.");
 }
 else {
console.log("It's a tie!");
 }

console.log("Refresh to play again!");




// computer =[1,2,3]

// var faceIndex = function(array){
// for (var i = 0; i <3; i++) {
//   var index;
//   array[i] = index;
//   return index;
//   }
// };

// console.log(faceIndex(computer));


// var displayDice = diceFace[faceIndex()];














