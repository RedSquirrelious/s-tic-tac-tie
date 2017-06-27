import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

const Player = Backbone.Model.extend({
    
  defaults: function(){
    return {
      name: '',
      mark: ''
    };
  }, 

  initialize: function() {
  },

  setName: function(name) {
    this.name = name;
  },

  setMark: function(mark) {
    this.mark = mark;
  },

  playSpace: function(space) {
    space.mark = this.mark;
  }

}); 

export default Player;
