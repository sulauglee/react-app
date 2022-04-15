import React, { Component } from 'react';
import Card from './Card';
import 'bootstrap';
class CardList extends Component {
  state = {};

  render() {
    if (true) {
      throw new Error('Error at runtime pls check with the Devloper !');
    }
    if (this.props.robots.length === 0) {
      return <h2 className="tc text-danger">there is no data found !</h2>;
    }
    const CardComponents = this.props.robots.map((user, i) => {
      return (
        <Card
          key={i}
          id={this.props.robots[i].id}
          name={this.props.robots[i].name}
          email={this.props.robots[i].email}
        />
      );
    });
    return <div>{CardComponents}</div>;
  }
}

export default CardList;
