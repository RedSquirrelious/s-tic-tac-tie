define(function(require) {
  var $ = require('jQuery');

  var viewManager = (function() {
    var currentView;

    function showView(view) {
      disposeView(currentView, function() {
        render(view);
      });
    }

    function disposeView(view) {
      if (!view) {
        return callback();
      }

      view.remove();
    }

    function render(view) {
      currentView = view;
      $('#app').html(currentView.el);
      currentView.render();
    }

    return {
      show: showView
    };
  })();

  return viewManager;
  
});