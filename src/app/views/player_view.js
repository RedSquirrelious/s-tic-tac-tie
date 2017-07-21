import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

import Player from 'app/models/player_model';


const PlayerView = Backbone.View.extend({
    
  initialize: function(options) {
    this.template = options.template;
    this.listenTo(this.player1, 'change', this.render );
    this.player1 = options.player1;
    this.player2 = options.player2;
  },
      
  render: function() {
    var html = this.template({nameP1: this.player1.name, nameP2: this.player2.name});
    this.$el.html(html);
    this.delegateEvents();
    return this;
  },
});
export default PlayerView;