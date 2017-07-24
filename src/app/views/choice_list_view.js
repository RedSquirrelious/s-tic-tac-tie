import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
// import GameView from 'app/views/game_view';
import ChoiceList from 'app/models/choice_list_model';


const ChoiceListView = Backbone.View.extend({

  initialize: function(options) {
    this.model = options.model;
    this.el = options.el;
    this.template = options.template;
  },

  events: {
    // 'click img': 'pickCharacter'
  },

  messages: {
    urgePick: 'Pick a persona!\n Click on one of the characters above!',
    tryAgain: 'Oops!  Try again!'
  },

  render: function() {
    this.listChoices();
    this.delegateEvents();
    return this;
  },

  listChoices: function(){
    var that = this;
    var choices = this.model.list;
    for (var choice in choices)
    {
      var id = choices[choice].name.toLowerCase().replace(/\s+/g, '_');

      var choiceImage = that.constructChoice(id, choices[choice].mark, choices[choice].name);

      var choiceDestination = $('<li></li>');

      choiceDestination.append(choiceImage);
      this.el.append(choiceDestination);
    }
  },

  constructChoice: function(id, mark, name) {
    var choiceImage = $('<img></img>');
    choiceImage.attr('id', id).attr('src', mark).attr('alt', `Image of ${name}`).attr('title', name);
    return choiceImage;
  },

  promptPickCharacter: function() {
    setTimeout(this.addPrompt(), 1000);
  },

  addPrompt: function() {
    var prompt = this.messages.urgePick;
    $('#prompt').html(prompt);
  },

  pickCharacter: function(event) {
    if (event.target.id != 'logo' && !$(event.currentTarget).hasClass('picked'))
    { 
      $(event.target).addClass('picked');
      $('#prompt').hide();
      var pick = event.target.id;
      return pick;
    }
    else {
      $('#prompt').show();  
      $('#prompt').html(this.messages.tryAgain);
    }
  }

});

export default ChoiceListView;
