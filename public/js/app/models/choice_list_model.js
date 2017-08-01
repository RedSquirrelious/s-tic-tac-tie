import Backbone from 'backbone';

const ChoiceList = Backbone.Model.extend({

  initialize: function() {
    this.list = this.showChoices();
    return this;
  },

  markImages: {
    grass: '/public/assets/squirrel-grass.jpg',
    rocks: '/public/assets/squirrel-rocks.jpg',
    snow: '/public/assets/squirrel-snow.jpg',
    bugs: '/public/assets/Bugs_Bunny.jpg',
    elmer: '/public/assets/Elmer_Fudd.jpg',
    sam: '/public/assets/Yosemite_Sam.jpg',
    daffy: '/public/assets/Daffy_Duck.jpg',
    porky: '/public/assets/Porky_Pig.jpg',
    marvin: '/public/assets/Marvin_the_Martian.jpg',
    coyote: '/public/assets/Wile_E._Coyote.jpg',
    roadrunner: '/public/assets/Roadrunner.jpg'
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
    coyote: 'Wile E Coyote',
    roadrunner: 'Roadrunner'
  },

  showChoices: function() {
    var that = this;
    return {
      bugs_bunny: {name: that.names.bugs, mark: that.markImages.bugs},
      wile_e_coyote: {name: that.names.coyote, mark: that.markImages.coyote},
      daffy_duck: {name: that.names.daffy, mark: that.markImages.daffy},
      elmer_fudd: {name: that.names.elmer, mark: that.markImages.elmer},
      marvin_the_martian: {name: that.names.marvin, mark: that.markImages.marvin},
      porky_pig: {name: that.names.porky, mark: that.markImages.porky},
      roadrunner: {name: that.names.roadrunner, mark: that.markImages.roadrunner},
      yosemite_sam: {name: that.names.sam, mark: that.markImages.sam},
      // grass: {name: that.names.grass, mark: that.markImages.grass},
      // rocks: {name: that.names.rocks, mark: that.markImages.rocks},
      // snow: {name: that.names.snow, mark: that.markImages.snow}
  }},

});


export default ChoiceList;