var Application = React.createClass({
  propTypes: {
    game: React.PropTypes.shape(
      {
        initialPlayer1: React.PropTypes.shape(
          {
            id: React.PropTypes.number.isRequired,
            initialName: React.PropTypes.string.isRequired,
            initialMark: React.PropTypes.string.isRequired,
            initialScore: React.PropTypes.number.isRequired,
          }).isRequired,

        initialPlayer2: React.PropTypes.shape(
          {
            id: React.PropTypes.number.isRequired,
            initialName: React.PropTypes.string.isRequired,
            initialMark: React.PropTypes.string.isRequired,
            initialScore: React.PropTypes.number.isRequired,
          }).isRequired,
        
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
                      )).isRequired,
                })).isRequired,
          }).isRequired,          
      }),
    players: React.PropTypes.arrayOf(
        React.PropTypes.shape(
          {
            id: React.PropTypes.number.isRequired,
            initialName: React.PropTypes.string.isRequired,
            initialMark: React.PropTypes.string.isRequired,
            initialScore: React.PropTypes.number.isRequired,
          }
        )
      ).isRequired,
  },
  getDefaultProps: function() {
    
  },

  getInitialState: function() {

  },
  makeRowOfSpaces: function() {
    var spaces = [];
    for (var i = 0; i < 3; i++)
    {
      spaces.push(<Space id={i} />);
    }
    return spaces;
  },

  makeBoardFromRows: function() {
    var rows = [],
    for (var i = 0; i < 3)
    {
      var row = this.addSpaces;
      rows.push(<Row id={i} initialSpaces={row}/>);
    }
    return rows;
  },

  startNewGame: function(player1, player2) {
    var board = this.makeBoardFromRows;
    return (
            <Game 
              initialBoard={board} 
              initialPlayer1={player1}
              initialPlayer2={player2}
            />);
  },

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

export default Application;