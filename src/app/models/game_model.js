import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import Board from 'app/collections/board_collection';
import Player from 'app/models/player_model';
import Space from 'app/models/space_model';

const Game = Backbone.Model.extend({
  defaults: {
    winStatus: "in progress",
    player1: '',
    player2: '',
    currentPlayer: '',
    playCounter: 0,
    board: ''
    // board: function() {
    // var spaces = new Array();
    // console.log(spaces);
    // for (var i = 0; i < 3; i++)
    // {
    //   for (var n = 0; n < 3; n++)
    //   {
    //     var space = new Space({row: i, col: n});
    //     spaces.push(space);
    //   }
    // }
    // var board = new Board(spaces);
  // }, 

  // defaults: function(){
  //   return {
  //     board: 'nothing',
  //     player1: '',
  //     player2: ''
  //   };
  }, 

  initialize: function(options) {
    this.set("player1", options.player1);
    this.set("player2", options.player2);
    // this.set("board", new Board());
    console.log('new game! ' + this.get("player1").attributes.name);
    console.log('new board?' + this.get("board"));  
    return this;
  }, 

// setPlayers: function(options) {
//   this.set("player1", options.player1);
//   this.player1.setMark('X');
//   this.set("player2", options.player2);
//   this.player2.setMark('O');
//   this.set("currentPlayer", this.player1);
//   },
      
setCurrentPlayer: function( player ) {
  if (player == "") 
    {
      throw 42
    } 
  else 
    {   
      this.set("currentPlayer", player);
    };
  },

setBoard: function() {
    // var spaces = new Array();
    // console.log(spaces);
    // for (var i = 0; i < 3; i++)
    // {
    //   for (var n = 0; n < 3; n++)
    //   {
    //     var space = new Space({row: i, col: n});
    //     spaces.push(space);
    //   }
    // }
    // this.board = new Board(spaces);
    // for (var i = 0; i< spaces.length; i++)
    // {
    //   console.log(spaces[i]);
    //   // this.board.add(space);
    // }
    // console.log(this.board);
  },

}); 

export default Game;

