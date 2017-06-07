import Backbone from 'backbone';

const Player = Backbone.Model.extend({

  defaults: {
  name: '',
  mark: '',
  },

  initialize: function(options) {
    this.name = options.name;
    this.mark = options.mark;
    console.log('new Player created');
  }
});


export default Player;
