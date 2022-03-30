import { Component } from "react";

export default class CardItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.handleCountClick = this.handleCountClick.bind(this);
  }

  handleCountClick() {
    const count = this.state.count + 1;

    this.setState({
      count,
    });
  }

  render() {
    return (
      <div className="card-item-wrapper">
        <div className="card-item">
          <img height="70%" width="75%" src={this.props.item.image} />
          <h1>{this.props.item.name}</h1>
          <div>{this.props.item.description}</div>
          <div>{this.state.count}</div>
        </div>

        <div className="card-btn">
          <button onClick={this.handleCountClick}>Action Button</button>
        </div>
      </div>
    );
  }
}
