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

  diagonalPossibilities: [
    'row0col0', 'row0col2', 'row1col1', 'row2col0', 'row2col2'
  ],

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

  returnLeftDiagonal: function() {
    var leftD = [];
    leftD.push(this.grid[0][0].get('mark'));
    leftD.push(this.grid[1][1].get('mark'));
    leftD.push(this.grid[2][2].get('mark'));
    return leftD;
  },

  returnRightDiagonal: function() {
    var rightD = [];
    rightD.push(this.grid[2][0].get('mark'));
    rightD.push(this.grid[1][1].get('mark'));
    rightD.push(this.grid[0][2].get('mark'));
    return rightD;
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

    switch(type)
    {
      case 'col':
        var colValues = this.returnCol(num);
        test = this.reportEvery(colValues, val);
        break;
      case 'row':
        var rowValues = this.returnRow(num);
        test = this.reportEvery(rowValues, val);
        break;
      case 'leftDiagonal':
        var leftDValues = this.returnLeftDiagonal();
        test = this.reportEvery(leftDValues, val);
        break;
      default:
        var rightDValues = this.returnRightDiagonal();
        test = this.reportEvery(rightDValues, val);
        break;
    }
    return test;    
  },


});

export default Board;