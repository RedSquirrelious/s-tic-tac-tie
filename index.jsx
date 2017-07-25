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

var Prompt = React.createClass({
  propTypes: {
    initialText: React.PropTypes.string,
  },

  getInitialState: function() {
    return {
      text: this.props.initialText,
    }
  },
  render: function() {
    return (
          <h5 id='prompt' className='highlight'>{this.state.text}</h5>   
      );
  },
});

// add addMark, addName
var Player = React.createClass({
  propTypes: {
    id: React.PropTypes.number.isRequired,
    initialName: React.PropTypes.string.isRequired,
    initialMark: React.PropTypes.string.isRequired,
    initialScore: React.PropTypes.number.isRequired,
    // onRemove: React.PropTypes.func.isRequired,
    // onScoreChange: React.PropTypes.func.isRequired,  
  },

  getDefaultProps: function() {
    return {
      initialName: '?',
      initialMark: '?',
      initialScore: 0,
    }
  },

  getInitialState: function() {
    return {
      name: this.props.initialName,
      mark: this.props.initialMark,
      score: this.props.initialScore,
    }
  },

  render: function() {
    return (
      <h2 key={props.id} class='small-12 large-5 columns'>{props.name}</h2>
      );
  },
});

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

// rows change state -- so class
var Board = React.createClass({
  propTypes: {
    initialRows: React.PropTypes.arrayOf(
      React.PropTypes.shape(
        {
          id: React.PropTypes.number.isRequired,
          spaces: React.PropTypes.arrayOf(
            React.PropTypes.shape(
              {
                id: React.PropTypes.number.isRequired,
                mark: React.PropTypes.string,
              }
            )
          ).isRequired,
        }
      ).isRequired,
    ).isRequired,,
  },

  getInitialState: function() {
    return {
      rows: this.props.initialRows,
    }
  },

  render: function() {
    return (
      <div id='board'>
        {this.state.rows.map(function(row, index) {
          <Row />
        })}
      </div> 
    );
  },
});

// spaces change state, so class
function Row(props) {
  var id = {this.props.id};
  var spaces = [];
  for (var i = 0; i < 3; i++)
    {
      var spaceId = `row${id}col${i}`;
      spaces.push(<Space id={spaceId} initialMark=''/>);
    }
  return (
    <section id={this.props.id} className="row-container">
      <ul id='row2'>
        {this.props.spaces.map(function(space, index) {
            return (
              <Space
                id='row'+ {this.props.spaces[index]} + 'col' + {space.id}} 
                mark=''
              />
            );
          }.bind(this))}
        </ul> 
      </section>
    );
  },
});

Row.propTypes = {
    id: React.PropTypes.number.isRequired,
    spaces: React.PropTypes.arrayOf(
      React.PropTypes.shape(
      {
        id: React.PropTypes.number.isRequired,
        mark: React.PropTypes.string,
      })
    ).isRequired,
  };
// marks change, so class
// add initial mark, this.state...
var Space = React.createClass({
  propTypes: {
    id: React.PropTypes.number.isRequired,
    initialMark: React.PropTypes.string,
  },

  getInitialState: function() {
    return {
      mark: this.props.initialMark,
    }
  },

  render: function() {
    return (
      <li key={this.props.id} className='square'>
        {this.state.mark}
      </li>);
  },
});


var Game = React.createClass({
  propTypes: {
    // board is array of rows
    //row is array of spaces
    // space has id & mark
    initialBoard: React.PropTypes.arrayOf(
      //rows
      React.PropTypes.shape(
        {
          id: React.PropTypes.number.isRequired,
          spaces: React.PropTypes.arrayOf(
            //spaces
            React.PropTypes.shape(
              {
                id: React.PropTypes.number.isRequired,
                mark: React.PropTypes.string,
              })).isRequired,
        })).isRequired,

    player1: React.PropTypes.shape(
      {
        id: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        mark: React.PropTypes.string.isRequired,
        score: React.PropTypes.number.isRequired,
      }
    ),

    player2: React.PropTypes.shape(
      {
        id: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        mark: React.PropTypes.string.isRequired,
        score: React.PropTypes.number.isRequired,
      }
    ),    
  },

  getInitialState: function() {
    return {
      player1: this.props.initialPlayer1,
        ),
      player2: this.props.initialPlayer2,
        ),
      board: this.props.initialBoard,
    }
  },

  render: function() {
    return (
      <section id='players' className='row'>
        <div id='player-list' class='row'>
          <Player 
            id={this.state.player1.id} 
            name={this.state.player1.name} 
            mark={this.state.player1.mark} 
            score={this.state.player1.score}/>
          <h2 class='small-12 large-2 columns'>vs.</h2>
            <Player 
              id={this.state.player2.id} 
              name={this.state.player2.name} 
              mark={this.state.player2.mark} 
              score={this.state.player2.score}/>
        </div>
      </section>
      <section id='game' className='row'>
          <Stats />
          <Board />
          <Stats />
        </section>
      );
  },
});

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

var Application = React.createClass({
  render: function() {
    return (
      <body>
        <nav class='top-bar'>
          <ul id='choices' class='title-area'>
          </ul>
        </nav>
        <main>
          <section class='row'>
            <Prompt 
              initialText=''
            />
          </section>
          <Player />
          <Game />
        </main>
      </body>
    );
  },
});