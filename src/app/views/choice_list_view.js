import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import GameView from 'app/views/game_view';
import ChoiceList from 'app/models/choice_list_model';

const ChoiceListView = Backbone.View.extend({

  initialize: function(options) {
    this.choiceList = options.choiceList;
    this.model = options.model;
    this.el = options.el;
    this.template = options.template;
  },

  render: function() {
    this.listChoices();
    return this;
  },

  listChoices: function(){
    var choices = this.choiceList.list;
    console.log(this.el);
    for (var choice in choices)
    {
      var html = '<li><img src=' + choices[choice].mark + '></li>';
      this.el.append(html);
      console.log(choices[choice].name);
      console.log(choices[choice].mark);
    }
  }
});

export default ChoiceListView;