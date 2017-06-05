// import Board from 'board';
// import Player from 'player';

// var Game = function() {
// this.winStatus = "in progress";
// this.board = new Board();
// };

// Game.prototype.checkWinStatus = function() {

// }; 

// Game.prototype.getCurrentPlayer = function() {    
//   return this.currentPlayer;
// };

// Game.prototype.setCurrentPlayer = function( player ) {
//   if (player == "") 
//     {
//       throw 42
//     } 
//   else
//     {
//       this.currentPlayer = player;
//     };
// };

// // Game.prototype.setPlayers = function(player1, player2) {
// //   this.player1 = player1;
// //   this.player2 = player2;
// //   this.setCurrentPlayer(player1);
// //   return [this.player1, this.player2];
// // };

// Game.prototype.takeTurns = function(row, col) {
//   this.currentPlayer.chooseSquare(row, col);

//   if (this.board.playCounter >= 5) 
//     {
//       console.log(this.checkWinStatus());
//     };  

//   if (this.currentPlayer == this.player1) 
//     {
//       this.currentPlayer = this.player2;
//     } 
//   else if (this.currentPlayer == this.player2 ) 
//     {
//       this.currentPlayer = this.player1;
//     };
//   this.board.drawBoard();
// }; 

// export default Game;
