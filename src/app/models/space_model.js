const Space = Backbone.Model.extend({
  defaults: 
    { 
      row: '-',
      column: '-',
      mark: '-'
    },
    
  initialize: function(options = null) {
    this.row = options.row;
    this.column = options.column;
    this.mark = options.mark;
    this.on('change', function() {
      console.log('- the space has been changed');
    })
  },

  setMark: function(playerMark) {
    this.$el.mark = playerMark;
  }
});