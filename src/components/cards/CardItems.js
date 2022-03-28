import { Component } from "react";

import { shopItem, carImages } from "../helpers/mockData";

export default class CardItems extends Component {
  constructor() {
    super();

    this.state = {
      data: [...shopItem],
    };
  }

  mapShopItems() {
    const shopData = [...this.state.data];

    return shopData.map((item) => {
      return (
        <div className="card-item-wrapper" key={item.id}>
          <div className="card-item">
            <img height="70%" width="75%" src={item.image} />
            <h1>{item.name}</h1>
            <div>{item.description}</div>
          </div>

          <div className="card-btn">
            <button>Action Button</button>
          </div>
        </div>
      );
    });
  }

  render() {
    return this.mapShopItems();
  }
}
