import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

import Player from 'app/models/player_model';
import Game from 'app/models/game_model';


const GameView = Backbone.View.extend({
  
  initialize: function(options) {
    // this.template = options.template;
    this.listenTo(this.model, 'change', this.render );
    this.model = options.model;
  },

  events: { 
  'click .square':  'play'
  },

  render: function() {
    var that = this;
    this.delegateEvents();
    return this;
  },

  winImage: {
    draw: 'assets/draw.jpg',
    won: "assets/winner.jpg"
  },

  play: function(event) {
    var player = this.model.currentPlayer;
    if (player.mark != undefined)
    {
      if (this.model.returnWinStatus() != 'in progress')
      {
        alert("This game is already over!");
      }
    else
      {
        if ($(event.currentTarget).has('.mark').length)
        { 
          alert("This square already has a mark!  Try another square!"); 
        } 
        else 
        { 
          this.markSquare(event.target.id);
          var row = event.target.id[3];
          var col = event.target.id[7];
          this.tallyMark(row, col, player.mark);
          this.checkWin(row, col, player.mark);
          this.model.takeTurns();
        };
      }
    }
  },

  markSquare: function(input) {
    var squareElement = '#' + input;
    var markImage = $('<img></img>');
    var markDiv = $('<div></div>');
    markImage.attr('src', this.model.currentPlayer.mark);
    markDiv.addClass('mark').append(markImage);
    $(squareElement).append(markDiv);
    this.fillSquare('div.mark', 'img');
  },

  fillSquare: function(container, item) {
    var fillClass = ($(container).height() > $(container).width()) 
    ? 'fillheight'
    : 'fillwidth';
    $(container).find(item).addClass(fillClass);
  },


  tallyMark: function(row, col, mark) {
    var space = this.model.board.grid[row][col];
    $('#prompt').hide();
    space.setMark(mark);
    this.model.playCounter += 1;
  },

  checkWin: function(row, col, mark) {
    if (this.model.playCounter >= 5)
    {
      if (this.model.playCounter == 9 && this.model.returnWinStatus() == 'in progress')
      {
        this.showWinStatus(this.winImage.draw);
      }
      this.model.checkWinStatus(row, col, mark)
    }
    if (this.model.returnWinStatus() != 'in progress')
    {
      this.showWinStatus(this.winImage.won);
      this.proclaimWinner();
    }
  }, 

  showWinStatus: function(image) {
    var win = $('<img></img>');
    win.attr('class', 'overlay').attr('src', image);
    $('#row2').append(win);
  },

  proclaimWinner: function() {
    this.model.setWinner(this.model.currentPlayer);
    this.highlightWinner(this.model.currentPlayer);
  },

  highlightWinner: function(winner) {
    if (winner == this.model.player1)
    {
      $('#player1').addClass('winner');
    }
    else
    {
      $('#player2').addClass('winner');
    }
  },


});

export default GameView;