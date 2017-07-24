import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

const Player = Backbone.Model.extend({
    
  defaults: {
      name: '?',
      mark: ''
  }, 

  initialize: function() {
    this.on('change:name', this.reportNameChange());
  },

  reportNameChange: function() {
    console.log(this.get('name'));
  },

  setName: function(name) {
    this.set('name', name);
  },

  setMark: function(mark) {
    this.mark = mark;
  },

  playSpace: function(space) {
    space.mark = this.mark;
  },

  markImages: {
    grass: 'assets/squirrel-grass.jpg',
    rocks: 'assets/squirrel-rocks.jpg',
    snow: 'assets/squirrel-snow.jpg',
    bugs: 'assets/Bugs_Bunny.jpg',
    elmer: 'assets/Elmer_Fudd.jpg',
    sam: 'assets/Yosemite_Sam.jpg',
    daffy: 'assets/Daffy_Duck.jpg',
    porky: 'assets/Porky_Pig.jpg',
    marvin: 'assets/Marvin_the_Martian.jpg',
    coyote: 'assets/Wile_E._Coyote.jpg',
    roadrunner: 'assets/Roadrunner.jpg'
  },

  names: {
    grass: 'Park Squirrel',
    rocks: 'Rock Squirrel',
    snow: 'Snow Squirrel',
    bugs: 'Bugs Bunny',
    elmer: 'Elmer Fudd',
    sam: 'Yosemite Sam',
    daffy: 'Daffy Duck',
    porky: 'Porky Pig',
    marvin: 'Marvin the Martian',
    coyote: 'Wile E. Coyote',
    roadrunner: 'Roadrunner'
  },
  

}); 

export default Player;
