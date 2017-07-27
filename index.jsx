// things to think about...  React data flows down.  So....  Game makes an array of spaces for the rows in its board?  (board = array of rows)?  NOT ...  a row makes spaces and a board makes rows?  and game makes a board?  Data flows from parent to child.  Need to reorg.

var React.require('react');

var PERSONAS = [
  { 
    name: 'Bugs Bunny',
    image: 'assets/Bugs_Bunny.jpg',
  },
  { 
    name: 'Elmer Fudd',
    image: 'assets/Elmer_Fudd.jpg',
  },
];
var PLAYERS = [
  {
    id: 1,
    name: '',
    mark: '',
    score: 0,
  }, 
  {
    id: 2,
    name: '',
    mark: '',
    score: 0,
  }, 
];

var SPACES = [
  {
    id: 0,
    mark: '',
  },
  {
    id: 1,
    mark: '',
  },
  {
    id: 2,
    mark: '',
  },
];



// choice list... 
function Persona(props) {
  return (
    <img src={props.image} class='' title={props.name}></img>
  );
}

Persona.propTypes = {
  image = React.PropTypes.string.isRequired,
  name = React.PropTypes.string.isRequired,
};






var Stats = React.createClass({
  propTypes: {
    initialScore: React.PropTypes.number,
  },
  getDefaultProps: function() {
    return {
      score: 0,
    }
  },
  getInitialState: function() {
    return {
      score: this.props.initialScore,
    }
  },
  render: function() {
    return (
      <div id='scoreP2' className='score'>
        <h4>Score</h4>
          <p>{this.state.score}</p>
      </div>
      );
  },
});