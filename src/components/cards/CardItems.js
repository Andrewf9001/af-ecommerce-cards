import { Component } from "react";

import CardItem from "./CardItem";
import { shopItem } from "../helpers/mockData";

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
      return <CardItem key={item.id} item={item} />;
    });
  }

  render() {
    return this.mapShopItems();
  }
}
