import Backbone from 'backbone';

const ChoiceList = Backbone.Model.extend({

  markImages: {
    grass: 'images/squirrel-grass.jpg',
    rocks: 'images/squirrel-rocks.jpg',
    snow: 'images/squirrel-snow.jpg',
    bugs: 'images/Bugs_Bunny.jpg',
    elmer: 'images/Elmer_Fudd.jpg',
    sam: 'images/Yosemite_Sam.jpg',
    porky: 'images/Daffy_Duck.jpg',
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

  choices: 
    [
    {name: this.names.bugs, mark: this.markImages.bugs},
    {name: this.names.coyote, mark: this.markImages.coyote},
    {name: this.names.daffy, mark: this.markImages.daffy},
    {name: this.names.elmer, mark: this.markImages.elmer},
    {name: this.names.grass, mark: this.markImages.grass},
    {name: this.names.marvin, mark: this.markImages.marvin},
    {name: this.names.porky, mark: this.markImages.porky},
    {name: this.names.roadrunner, mark: this.markImages.roadrunner},
    {name: this.names.rocks, mark: this.markImages.rocks},
    {name: this.names.sam, mark: this.markImages.sam},
    {name: this.names.snow, mark: this.markImages.snow}
    ]

  // choices: {
  //   bugs: {name: this.names.bugs, mark: this.markImages.bugs},
  //   coyote: {name: this.names.coyote, mark: this.markImages.coyote},
  //   daffy: {name: this.names.daffy, mark: this.markImages.daffy},
  //   elmer: {name: this.names.elmer, mark: this.markImages.elmer},
  //   grass: {name: this.names.grass, mark: this.markImages.grass},
  //   marvin: {name: this.names.marvin, mark: this.markImages.marvin},
  //   porky: {name: this.names.porky, mark: this.markImages.porky},
  //   roadrunner: {name: this.names.roadrunner, mark: this.markImages.roadrunner},
  //   rocks: {name: this.names.rocks, mark: this.markImages.rocks},
  //   sam: {name: this.names.sam, mark: this.markImages.sam},
  //   snow: {name: this.names.snow, mark: this.markImages.snow}
  // }

});


export default ChoiceList;