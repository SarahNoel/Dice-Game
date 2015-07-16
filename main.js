console.log("Welcome to the Daring Dice Game!");
var die = 0;

var player1 = [], computer = [];

function roll(player){
 for (var i = 0; i < 3; i++) {
 die = Math.ceil(Math.random()*6);
 player.push(die);
 }
}
roll(computer);
roll(player1);

console.log("The computer rolled " +computer);
console.log("You rolled "+ player1);

function sum(array) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    count = count + array[i];
  }
  return count;
}

function winstraight(array) {
for (var i = 0; i < array.length; i++) {
  if (array[0] === 4 || array[1] === 4 || array[2] === 4 ){
    if(array[0] === 5 || array[1] === 5 || array[2] === 5 ){
      if(array[0] === 4 || array[1] === 4 || array[2] === 4 ){
        return true;
      }
    }
  }
}
}

function losestraight(array) {
for (var i = 0; i < array.length; i++) {
  if (array[0] === 4 || array[1] === 4 || array[2] === 4 ){
    if(array[0] === 5 || array[1] === 5 || array[2] === 5 ){
      if(array[0] === 4 || array[1] === 4 || array[2] === 4 ){
        return true;
      }
    }
}
}
}

if(winstraight(player1 )=== true){
console.log("You win!");
} else if (winstraight(computer)=== true){
  console.log("The computer wins.");
} else if (losestraight(player1)=== true) {
  console.log("The computer wins.");
}else if (losestraight(computer)=== true) {
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
