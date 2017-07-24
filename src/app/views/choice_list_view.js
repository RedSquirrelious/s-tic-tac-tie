import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import ChoiceList from 'app/models/choice_list_model';


const ChoiceListView = Backbone.View.extend({

  initialize: function(options) {
    this.model = options.model;
    this.el = options.el;
    this.template = options.template;
  },

  events: {
    'click img': 'pickCharacter',
    'click #logo': 'reloadGame',
    'mouseenter img': 'highlightHover',
    'mouseleave img': 'removeHoverEffect'
  },

  messages: {
    howToPick: '  Click on one of the characters above!',
    urgePick1: 'Pick a persona, Player1!',
    urgePick2: 'Pick a persona, Player2!',
    tryAgain: 'Oops!  Try again!',
    pickedAlready: "You've already picked your character.  Maybe play a square instead?"
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

  promptPickCharacter: function(player) {

    setTimeout(this.addPrompt(player), 1000);
  },

  addPrompt: function(player) {
    var prompt = this.messages.urgePick2;
    if (player == this.model.parent.player1)
      { 
        prompt = this.messages.urgePick1;
      }
    prompt += this.messages.howToPick;
    $('#prompt').html(prompt);
  },

  pickCharacter: function(event) {
    var prompt = $('#prompt');
    var promptText;
    if (this.validatePick(this.model.parent.currentPlayer))
    {
      if (event.target.id != 'logo' && !$(event.currentTarget).hasClass('picked'))
      { 
        var player = this.model.parent.currentPlayer;
        $(event.target).addClass('picked');
        prompt.hide();
        player.setName(event.target.title);
        player.setMark(event.target.src);
        this.model.parent.takeTurns();
        // this.promptPickCharacter('x');
      }
      else {
        promptText = this.messages.tryAgain;
      }
    }
    else {
      promptText = this.messages.pickedAlready;
    }
    if (event.target.id != 'logo')
    {
      prompt.show();
      prompt.html(promptText);
    }
  },

  validatePick: function(player) {
    if (player.get('name') == '?')
    {
      return true;
    }
    return false;
  },

// might or might not work depending on browser 
  highlightHover: function(event) {
    console.log($(event.target));
    $(event.target).addClass('maybeChoose');
  },

  removeHoverEffect: function(event) {
    $(event.target).removeClass('maybeChoose');
  },

  // DOES NOT BELONG HERE BUT.... WILL GO HERE UNTIL I SPLIT GAMEVIEW INTO BOARD.... 
  // AND NEST CHOICELISTVIEW AND BOARDVIEW INTO GAMEVIEW, THEN WILL GO INTO GAMEVIEW
  reloadGame: function() {
    location.reload();
  }

});

export default ChoiceListView;
