import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import Spaces from 'app/collections/board_collection';
// import Player from 'app/models/player_model';
import Space from 'app/models/space_model';

const Board = Backbone.Model.extend({
  defaults: {
    grid: []
  },

  initialize: function() {
    this.grid = this.makeAllSpaces();
},

makeRow: function() {
  var row = [];

  for (var i = 0; i < 3; i++)
  {
    var space = new Space();
    row.push(space);
  }
  return row;
},


makeAllSpaces: function() {
  var grid = [];
  for (var i = 0; i < 3; i++)
  {
    var row = this.makeRow();
    grid.push(row);
  }
  return grid;
},



  returnRow: function(rowNumber) {
    var that = this;
    var row = [];
    for (var i = 0; i < 3; i++)
    {
      row.push(that.grid[rowNumber][i].get('mark'));
    }
    return row;
  },

  returnCol: function(colNumber) {
    var that = this;
    var col = [];
    for (var i = 0; i < 3; i++)
    {
      col.push(that.grid[i][colNumber].get('mark'));
    }
    return col;
  },

  reportEvery(line, val) {
    return line.every(lineVal => val === lineVal);
  },

  reportMatch: function(num, type, val) {
    var test;
    if (type == 'col')
    {
      var col = this.returnCol(num);
      test = this.reportEvery(col, val);
    }
    else
    {
      var row = this.returnRow(num);
      test = this.reportEvery(row, val);
    }
    return test;    
  },


});

export default Board;