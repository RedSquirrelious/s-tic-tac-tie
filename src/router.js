// import $ from 'jquery';
// import Backbone from 'backbone';
// import _ from 'underscore';

// const Router = Backbone.Router.extend({

//   routes: {
//     '': 'ticTacToe'
//   },

//   initialize: function(options) {
//     this.game = options.game;
//     this.model = options.model;
//     this.el = options.el;
//     this.gameTemplate = options.gameTemplate;
//     this.appView = options.appView;
//     this.currentGame = options.currentGame;
//     this.playerView = options.playerView;
//     this.playerTemplate = options.playerTemplate;
//   },

//   ticTacToe: function() {
//     var game = new Game();
//     var gameView = new GameView({el: this.el, model: this.model, template: this.gameTemplate, currentGame: this.currentGame});
//     this.appView.showView(gameView);
//   },

//   addPlayers: function() {
//     var player = new Player();
//     var playerView = new PlayerView({template: this.playerTemplate});
//   }



// })