import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

import Player from 'app/models/player_model';


const PlayerView = Backbone.View.extend({
    
  initialize: function(options) {
    this.template = options.template;
    this.player1 = options.player1;
    this.player2 = options.player2;
    this.listenTo(this.player1, 'change:name', this.render);
    this.listenTo(this.player2, 'change:name', this.render);
  },
      
  render: function() {
    this.$el.html(this.showName());
    this.delegateEvents();
    return this;
  },

  showName: function(name=null) {
    var nameP1 = this.player1.get('name');
    var nameP2 = this.player2.get('name');
    var html = this.template({nameP1: nameP1, nameP2: nameP2});
    return html;
  }
});
export default PlayerView;