import React, { Component } from 'react';
import CardList from './CardList';
// import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';
class App extends Component {
  // state = {

  // };
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: '',
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((Response) => Response.json())
      .then((users) => this.setState({ robots: users }));
    // this.setState({ robots: robots });
  }
  onSearchChange = (event) => {
    console.log(event.target.value);
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const filterdRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <h2 className="tc">Loading ...</h2>;
    }
    return (
      <div className="tc pa3">
        <h1 className="f1">robots frinds</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filterdRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
