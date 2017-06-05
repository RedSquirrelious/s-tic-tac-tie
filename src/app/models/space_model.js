import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

const Space = Backbone.Model.extend({
  defaults: 
    { 
      row: '',
      col: '',
      mark: '',
      id: ''
    },
    
  initialize: function(options = null) {
    this.row = options.row;
    this.col = options.col;
    this.id = 'row' + this.row + 'col' + this.col;
    // console.log(this.id);
    this.on('change', function() {
      console.log('- the space has been changed');
    })
  },

  setMark: function(playerMark) {
    this.mark = playerMark;
  },
  
});

export default Space;