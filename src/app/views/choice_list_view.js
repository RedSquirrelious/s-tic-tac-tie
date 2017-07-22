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

  events: {
    'click img': 'pickCharacter'

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
      var name = choices[choice].name.toLowerCase();
      var choiceId = name.replace(/\s+/g, '_');
      var html = '<li><img id="' + choiceId + '" src=' + choices[choice].mark + '></li>';
      this.el.append(html);
      console.log(choices[choice].name);
      console.log(choices[choice].mark);
    }
  },

  pickCharacter: function(event) {
    if (event.target.id != 'logo')
    { 
      $(event.target).addClass('picked');
      var choices = this.choiceList.showChoices();
      var choice = choices[event.target.id];
      console.log(choice);
    }
  }
});

export default ChoiceListView;
