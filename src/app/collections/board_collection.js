import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import Space from 'app/models/space_model';
// //Board

const Board = Backbone.Collection.extend( {
  model: Space,

}); //END Board

export default Board;
