var React.require('react');

const Space = React.createClass({
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

export default Space;