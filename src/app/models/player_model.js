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

  initialize: function(options) {
    this.set("name", options.name);
    this.set("mark", options.mark);
    console.log('new Player created: ' + this.get("name"));
  }
  // , 

  // setName: function(name) {
  //   if (name == "") 
  //     {
  //       throw 42
  //     } 
  //   else 
  //     {
  //       this.name = name;
  // }}, 
      
  // setMark: function(mark) {
  //   this.set("mark", mark);
  // }, 
}); 

export default Player;
