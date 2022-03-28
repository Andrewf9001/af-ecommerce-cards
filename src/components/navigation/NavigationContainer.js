import { Component } from "react";

import NavItems from "./NavItems";
import { userData } from "../helpers/mockData";
import TruenoLogo from "../../static/ae86-icon.png";

export default class NavigationContainer extends Component {
  constructor() {
    super();

    this.state = {
      user: [...userData],
    };
  }

  render() {
    return (
      <div className="navigation-container">
        <div className="left-column-wrapper">
          <img src={TruenoLogo} />
        </div>

        <div className="center-column-wrapper">
          <NavItems />
        </div>

        <div className="right-column-wrapper">
          <h3>
            {this.state.user[0].first_name} {this.state.user[0].last_name}
          </h3>
        </div>
      </div>
    );
  }
}
