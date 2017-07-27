var React.require('react');

const Board = React.createClass({
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

export default Board;