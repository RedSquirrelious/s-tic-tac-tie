import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import GameView from 'app/views/game_view';
import ChoiceList from 'app/models/choice_list_model';

const ChoiceListView = Backbone.View.extend({
  initialize: function(options) {

    this.render();
  },

  render: function() {
    var html = 'choices';
    this.$el.html(html);
    return this;
  },

  listChoices: function(){
    // foreach (var choice in this.model.choices)
    // {
    //   console.log(`${choice.name}, ${choice.mark}`);
    // }
  }
});

export default ChoiceListView;
