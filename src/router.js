import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

const Router = Backbone.Router.extend({

  routes: {
    '': 'ticTacToe'
  },

  ticTacToe: function() {
    require('./app/')
  }


})