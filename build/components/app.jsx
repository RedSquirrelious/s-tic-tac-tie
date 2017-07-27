import React from 'react';
import ReactDOM from 'react-dom';


class Space extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mark: this.props.initialMark,
    }
  }

  render() {
    return (
      <li key={this.props.id} className='square'>
        <p>{this.state.mark}</p>
      </li>
    );
  }
}

Space.propTypes = {
  mark: React.PropTypes.string,
  id: React.PropTypes.number,
};

Space.defaultProps = {
  initialMark: 'XXX',
  id: 0,
};

export default class App extends React.Component {
  makeRowOfSpaces() {
    var spaces = [];
    for (var i = 0; i < 3; i++)
    {
      spaces.push(<Space id={i} />);
    }
    return spaces;
  }

  render() {
    return (
        <main>
          <section className='row'>
          <Space />
          </section>
        </main>
    );
  }
}

