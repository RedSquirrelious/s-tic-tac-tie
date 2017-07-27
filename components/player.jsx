var React.require('react');

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

export default Player;