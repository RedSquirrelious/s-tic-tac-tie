var React.require('react');

const Prompt = React.createClass({
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

export default Prompt;