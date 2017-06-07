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

  initialize: function(options) {
    this.name = options.name;
    this.mark = options.mark;
  }

}); 

export default Player;
