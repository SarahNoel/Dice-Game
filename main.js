console.log("Welcome to Cee-Lo!");

// define variables
var player1 = [];
var computer = [];

//rolls dice for given player and amount of dice specified
function roll(player, numDice){
  var die = 0;
  for (var i = 0; i < numDice; i++) {
    die = Math.ceil(Math.random()*6);
    player.push(die);
  }
}

//adds the score of the dice rolled
function sum(array) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    count = count + array[i];
  }
  return count;
}

//checks dice to see if they contains 3 given numbers
function straight(array, num1, num2, num3) {
  for (var i = 0; i < array.length; i++) {
    if (array[0] === num1 || array[1] === num1 || array[2] === num1 ){
      if(array[0] === num2 || array[1] === num2 || array[2] === num2 ){
        if(array[0] === num3 || array[1] === num3 || array[2] === num3 ){
          return true;
        }
      }
    }
  }
}

//rules to find winner

function winCheck(){
  if (straight(player1, 4, 5, 6)){
    console.log("You win!");

  } else if (straight(computer, 4, 5, 6)){
    console.log("The computer wins.");

  } else if (straight(player1, 1, 2, 3)) {
    console.log("The computer wins.");

  } else if (straight(computer, 1, 2, 3)) {
    console.log("You win!");

  } else if (sum(player1) > sum(computer)){
    console.log("You win!");

  } else if (sum(computer) > sum(player1)){
    console.log("The computer wins.");

  } else {
    console.log("It's a tie!");
  }
}




roll(player1, 3);
roll(computer, 3);

console.log("The computer rolled " +computer);
console.log("You rolled "+ player1);

winCheck();

console.log("Refresh to play again!");





// player1 = [1,1,1];
// computer = [1,2,3];

// var faceIndex = function(array){
// for (var i = 0; i <3; i++) {
//   var index;
//   array[i] = index;
//   return index;
//   }
// };

// console.log(faceIndex(computer));


// var displayDice = diceFace[faceIndex()];

// var diceFace = ['\u2680', '\u2681', '\u2682', '\u2683', '\u2684', '\u2685'];

// console.log(diceFace);












