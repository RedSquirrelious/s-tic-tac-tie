import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Contact from 'app/models/contact';
const BoardView = Backbone.View.extend({

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

  addMarkToSpace: function(row, col, mark) {
    var space = this.model.board.grid[row][col];
    space.setMark(mark);
    this.model.playCounter += 1;
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
    
});
