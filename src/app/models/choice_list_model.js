import Backbone from 'backbone';

const ChoiceList = Backbone.Model.extend({

  initialize: function() {
    this.list = this.showChoices();
    return this;
  },

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
  },

  showChoices: function() {
    var that = this;
    return {
      bugs: {name: that.names.bugs, mark: that.markImages.bugs},
      coyote: {name: that.names.coyote, mark: that.markImages.coyote},
      daffy: {name: that.names.daffy, mark: that.markImages.daffy},
      elmer: {name: that.names.elmer, mark: that.markImages.elmer},
      marvin: {name: that.names.marvin, mark: that.markImages.marvin},
      porky: {name: that.names.porky, mark: that.markImages.porky},
      roadrunner: {name: that.names.roadrunner, mark: that.markImages.roadrunner},
      sam: {name: that.names.sam, mark: that.markImages.sam},
      // grass: {name: that.names.grass, mark: that.markImages.grass},
      // rocks: {name: that.names.rocks, mark: that.markImages.rocks},
      // snow: {name: that.names.snow, mark: that.markImages.snow}
  }},

});


export default ChoiceList;