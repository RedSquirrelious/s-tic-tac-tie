define(function(require) {
  var GameView = require('./views/game_view');

  return {
    run: function (viewManager) {
      var view = new GameView();
      viewManager.show(view);
    }
  };
});