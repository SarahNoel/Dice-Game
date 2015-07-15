console.log("Welcome to Cee-Lo");
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

if (player1>computer) {
 console.log("You win!");
}
 else if (computer > player1){
   console.log("The computer wins.");
 }
 else { console.log("It's a tie!")

 }

// console.log("Welcome to Cee-Lo");
//  // var numPlayers = prompt("How many Players?");
//  var die = 0;
//  var player1 = [], computer = [];
//  roll(computer);
//
//  function roll(player) {
//    for (var i = 0; i < 3; i++) {
//      die = Math.ceil(Math.random()*6);
//      player.push(die);
//    }
//  };
//
//  function compare() {
//    if (sum(player1) > sum(computer)) {
//      console.log('You rolled ' + player1 + ' You win!');
//    } else {
//      console.log('The computer rolled ' + computer + ' The computer wins :(');
//    }
//  };
//
//  function sum(array) {
//    var count = 0;
//    for (var i = 0; i < array.length; i++) {
//      count = count + array[i];
//    }
//    return count;
//  };


//
// console.log("Welcome to Cee-Lo");
// // var numPlayers = prompt("How many Players?");
// var die = 0;
// var player1 = [], computer = [];
// roll(computer);
//
// function roll(player) {
//  for (var i = 0; i < 3; i++) {
//    die = Math.ceil(Math.random()*6);
//    player.push(die);
//  }
// }
//
// function compare() {
//  if (sum(player1) > sum(computer)) {
//    console.log('player1 wins!', player1);
//  } else {
//    console.log('computer wins :(', computer);
//  }
// }
//
// function sum(array) {
//  var count = 0;
//  for (var i = 0; i < array.length; i++) {
//    count = count + array[i];
//  }
