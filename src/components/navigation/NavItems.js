import { Component } from "react";

import { NavigationLinks } from "../helpers/mockData";

export default class NavItems extends Component {
  constructor() {
    super();

    this.state = {
      navLinks: [...NavigationLinks],
    };
  }

  mapNavLinks() {
    let navLinkItems = [...this.state.navLinks];

    return navLinkItems.map((item) => {
      return (
        <div className="nav-link" key={item}>
          <button>{item}</button>
        </div>
      );
    });
  }

  render() {
    return <div className="nav-links-wrapper">{this.mapNavLinks()}</div>;
  }
}
