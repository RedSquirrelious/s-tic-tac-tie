import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import Board from 'app/models/board_model';
import Player from 'app/models/player_model';
import Game from 'app/models/game_model';
const GameView = Backbone.View.extend({
  
  initialize: function(options) {
    this.template = options.template;
    this.listenTo(this.model, 'change', this.render );
    this.currentGame = options.currentGame;
  },

  events: { 
  'click .square': 'markSquare'
  },

  render: function() {
    var that = this;
    this.delegateEvents();
    return this;
  },

  markImages: {
    grass: "images/squirrel-grass.jpg",
    rocks: "images/squirrel-rocks-c.jpg",
    bugs: "images/Bugs_Bunny.png",
    elmer: "images/Elmer_Fudd.gif",
    sam: "images/Yosemite_Sam.png",
    daffy: "images/Daffy_Duck.png",
    porky: "images/Porky_Pig.png",
    marvin: "images/Marvin_the_Martian.png",
    coyote: "images/Wile_E._Coyote.png",
    roadrunner: "images/Roadrunner.png"
  },

  markSquare: function(event) {
  var that = this;
  console.log(event.target.id);
    
  //watches for clicks on the board squares

  // $('.row-container').children().children().on('click', function() { 

  //checks to see if an image/mark is in there already & stops them if there is
  if ($('#' + event.target.id).has('.mark').length) { 
    alert("This Square Already Has a Mark!  Try Another Square!"); 
  } 
  else { 
    var squareElement = '#' + event.target.id + ' p'; 
    $(squareElement).append('<section class="mark"><img src=' + this.model.currentPlayer.attributes.mark + '></section>');};
    this.takeTurns();
  },


  takeTurns: function() {
    $('#board h2').append('<h4>' + this.checkWinStatus + '</h4>');
    if (this.model.currentPlayer == this.model.attributes.player1) 
    {
      this.model.currentPlayer = this.model.attributes.player2;
    } 
    else if (this.model.currentPlayer == this.model.attributes.player2 ) 
    {
      this.model.currentPlayer = this.model.attributes.player1;
    };
  } 
});

export default GameView;