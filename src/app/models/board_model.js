import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import Spaces from 'app/collections/board_collection';
// import Player from 'app/models/player_model';
import Space from 'app/models/space_model';

const Board = Backbone.Model.extend({
  defaults: {
    grid: [],
    row1: [],
    row2: [],
    row3: [],
    playCounter: 0,
  },

  initialize: function() {
    this.grid = this.makeSpaces();
},

  makeSpaces: function() {
    var grid = [];
    for (var i = 0; i < 3; i++)
    {
      var arr = new Array();
      for (var n = 0; n < 3; n++)
      {
        var space = new Space();
        arr.push(space);
      }
      grid.push(arr);
    }
    return grid;
  },

  makeRows: function() {
    var row = [];
    for(var i = 0; i < 3; i++)
    {
      var space = new Space();
      row.push(space);
    }
    return row;
  },
  
  returnRow: function(rowNumber) {
    var rowGrid = this.grid;
    var showRow = [];
    for (var i = 0; i < 3; i++)
    {
      showRow.push(rowGrid[rowNumber][i].mark)
    }
    return showRow;
  },

  returnCol: function(colNumber) {
    var that = this;
    var showCol = [];
    for (var i = 0; i < 3; i++)
    {
      showCol.push(that.grid[i][colNumber].mark);
    }
    return showCol;
  },

  checkWinStatus: function() {
    if (playCounter >= 5)
    {

    }
    return null;
  }

});

export default Board;