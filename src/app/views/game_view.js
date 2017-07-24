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
    won: "assets/winner.jpg"
  },

  play: function(event) {
    var that = this;
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
        this.addMarkToSpace(row, col, this.model.currentPlayer.mark);
        this.checkWin(row, col, this.model.currentPlayer.mark);
        this.takeTurns();
      };
    }
  },

  markSquare: function(input) {
    console.log($(input));
    var squareElement = '#' + input; 
    $(squareElement).append("<div class='mark'><img src=" + this.model.currentPlayer.mark + "></div>");
    this.fillSquare('div.mark', 'img');
  },

    fillSquare: function(container, item) {
    var fillClass = ($(container).height() > $(container).width()) 
    ? 'fillheight'
    : 'fillwidth';
    $(container).find(item).addClass(fillClass);
    // console.log(item);
  },

  takeTurns: function() {
    if (this.model.currentPlayer == this.model.player1) 
    {
      this.model.currentPlayer = this.model.player2;
    } 
    else
    {
      this.model.currentPlayer = this.model.player1;
    };
  },

  addMarkToSpace: function(row, col, mark) {
    var space = this.model.board.grid[row][col];
    space.setMark(mark);
    this.model.playCounter += 1;
  },

  checkWin: function(row, col, mark) {
    if (this.model.playCounter >= 5)
    {
      this.model.checkWinStatus(row, col, mark)
      console.log(`Counter: ${this.model.playCounter}`);
    }
    if (this.model.returnWinStatus() != 'in progress')
    {
      console.log(this.model.currentPlayer.name);
      // alert(this.model.returnWinStatus());
      this.proclaimWin();
    }
  }, 

  proclaimWin: function() {
    this.model.setWinner(this.model.currentPlayer);
    this.highlightWinner(this.model.currentPlayer);
    $('#row2').append(`<img class='overlay' src=${this.winImage.won}>`);
  },

  highlightWinner: function(winner) {
    if (winner == this.model.player1)
    {
      $('#player1').addClass('highlight');
    }
    else
    {
      $('#player2').addClass('highlight');
    }
  },


});

export default GameView;