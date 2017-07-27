var React.require('react');

const Row = React.createClass({
  propTypes: {
    id: React.PropTypes.number.isRequired,
    initialSpaces: React.PropTypes.arrayOf(
      React.PropTypes.shape(
      {
        id: React.PropTypes.number.isRequired,
        mark: React.PropTypes.string,
      })
    ).isRequired,
  },

  getInitialState: function() {
    this.spaces = this.props.initialSpaces;
  },

  render: function() {
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

export default Row;
