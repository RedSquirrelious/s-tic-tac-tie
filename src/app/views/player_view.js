import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import Board from 'app/models/board_model';
import Player from 'app/models/player_model';

const PlayerView = Backbone.View.extend({
    
  initialize: function(options) {
    this.template = options.template;
    this.listenTo(this.model, 'change', this.render );
    this.player = options.player;
  },
      
  render: function() {
    var html = this.template({name: this.player.attributes.name, row0: this.player.attributes.row0});
    this.$el.html(html);
    this.delegateEvents();
    return this;
  },
});
export default PlayerView;