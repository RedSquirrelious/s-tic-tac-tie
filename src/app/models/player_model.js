import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

const Player = Backbone.Model.extend({
    
  defaults: function(){
    return {
      name: '',
      mark: ''
    };
  }, 

  initialize: function() {
  },

  setName: function(name) {
    this.name = name;
  },

  setMark: function(mark) {
    this.mark = mark;
  },

  playSpace: function(space) {
    space.mark = this.mark;
  }

 markImages: {
    grass: 'images/squirrel-grass.jpg',
    rocks: 'images/squirrel-rocks.jpg',
    snow: 'images/squirrel-snow.jpg',
    bugs: 'images/Bugs_Bunny.jpg',
    elmer: 'images/Elmer_Fudd.jpg',
    sam: 'images/Yosemite_Sam.jpg',
    daffy: 'images/Daffy_Duck.jpg',
    porky: 'images/Porky_Pig.jpg',
    marvin: 'images/Marvin_the_Martian.jpg',
    coyote: 'images/Wile_E._Coyote.jpg',
    roadrunner: 'images/Roadrunner.jpg'
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
  }
}); 

export default Player;
