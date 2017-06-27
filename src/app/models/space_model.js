import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

const Space = Backbone.Model.extend({
  defaults: 
    { 
      mark: '',
    },
    
  initialize: function(options = null) {
    this.on('change', function() {
      console.log('- the space has been changed');
    })
  },

  setMark: function(playerMark) {
    this.mark = playerMark;
  },
  
});

export default Space;