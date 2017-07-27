var React.require('react');

var Game = React.createClass({
  propTypes: {
    initialBoard: React.PropTypes.shape(
      {
        id: React.PropTypes.number.isRequired,
        initialRows: React.PropTypes.arrayOf(
          React.PropTypes.shape(
            {
              id: React.PropTypes.number.isRequired,
              initialSpaces: React.PropTypes.arrayOf(
                React.PropTypes.shape(
                  {
                    id: React.PropTypes.number.isRequired,
                    mark: React.PropTypes.string,
                  }
                )
              ).isRequired,
            })
          ).isRequired,
      }).isRequired,

    initialPlayer1: React.PropTypes.shape(
      {
        id: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        mark: React.PropTypes.string.isRequired,
        score: React.PropTypes.number.isRequired,
      }
    ),

    initialPlayer2: React.PropTypes.shape(
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

export default Game;