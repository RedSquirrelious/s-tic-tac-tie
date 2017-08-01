import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
var viewManager = require('./core/viewManager');

const Router = Backbone.Router.extend({

  routes: {
    '': 'game'
  },

  game: function() {
    require('./test').run(viewManager);
  }
});

export default Router;