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

  logoImages: {
    logoLocation: './assets/tic-tac-toe-logo.jpg'
  },

  messages: {
    howToPick: '  Click on one of the characters above!',
    urgePick1: 'Pick a persona, Player1!',
    urgePick2: 'Pick a persona, Player2!',
    tryAgain: 'Oops!  Try again!',
    youPickedAlready: "You've already picked your character.  Maybe play a square instead?"
  },

  render: function() {
    this.addLogo();
    this.listChoices();
    this.delegateEvents();
    return this;
  },

  addLogo: function() {
    var logoImage = this.constructImage('logo', this.logoImages.logoLocation, 'Tic-Tac-Toe');
    logoImage.attr('title', 'New Game');
    var logoDestination = $('<li></li>');
    logoDestination.append(logoImage);
    this.el.append(logoDestination);
  },

  listChoices: function(){
    var that = this;
    var choices = this.model.list;
    for (var choice in choices)
    {
      var id = choices[choice].name.toLowerCase().replace(/\s+/g, '_');

      var choiceImage = that.constructImage(id, choices[choice].mark, choices[choice].name);

      var choiceDestination = $('<li></li>');

      choiceDestination.append(choiceImage);
      this.el.append(choiceDestination);
    }
  },

  constructImage: function(id, mark, name) {
    var choiceImage = $('<img></img>');
    choiceImage.attr('id', id).attr('src', mark).attr('alt', `Image of ${name}`).attr('title', name);
    return choiceImage;
  },

  promptPickCharacter: function(player) {
    if (this.validatePlayer(player))
    {
      console.log(player);
      setTimeout(this.addPrompt(player), 1000);
      return true;
    }
  },

  addPrompt: function(player=null) {
    var prompt = this.messages.urgePick1;
    if (player == this.model.parent.player2)
      { 
        console.log('well?')
        prompt = this.messages.urgePick2;
        console.log(prompt);
      }
    prompt += this.messages.howToPick;
    $('#prompt').html(prompt);
  },


  pickCharacter: function(event) {
    var prompt = $('#prompt');
    // var promptText = '';
    var promptText;
    console.log(prompt.html());
    {
      prompt.hide();
    }
    // has the player already picked their character?
    if (this.validatePlayer(this.model.parent.currentPlayer))
    {
      // is this pick suitable?
      if (this.validatePick(event))
      { 
        var player = this.model.parent.currentPlayer;
        $(event.target).addClass('picked');
        prompt.hide();
        player.setName(event.target.title);
        player.setMark(event.target.src);
        
        if (player == this.model.parent.player1)
        {
          console.log('huh');
          var x = this.promptPickCharacter(this.model.parent.player2);
        }
          this.model.parent.takeTurns();
      }
      // if this pick isn't suitable... if it's a logo or player1's choice
      else {
        promptText = this.messages.tryAgain;
      }
    }
    // the player already picked a character
    else {
      promptText = this.messages.youPickedAlready;
    }
    
    // prevents the try again message from showing up again if player 2 picks a good pick
    // after clicking on unsuitable images (player1's)
    if (this.validatePlayer(this.model.parent.currentPlayer))
      {
        prompt.show();
        prompt.html(promptText);
      }

      // if a valid player picks a bad square, fade this out
    if (promptText = this.messages.tryAgain)
    {
      setTimeout(function() { 
        prompt.fadeOut('fast');
      }, 1000); //
    }
  },

  validatePick: function(event) {
    var promptText;
    if (event.target.id == 'logo' || $(event.currentTarget).hasClass('picked'))
    {
      return false;
    }
    return true;
  },

  validatePlayer: function(player) {
    if (player.get('name') == '?')
    {
      return true;
    }
    return false;
  },

// might or might not work depending on browser 
  highlightHover: function(event) {
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
