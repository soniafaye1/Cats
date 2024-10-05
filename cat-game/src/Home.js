import React, { Component } from "react";

class Home extends Component {
  render() {
    let itemList = this.props.items.map((item) => {
      return (
        <div className="card" key={item.id}>
          <div>
            <img src={item.img} alt={item.title} />
            <span>{item.title}</span>
            <span to="/">
              <i>add</i>
            </span>
          </div>

          <div className="card-content">
            <p>{item.desc}</p>
            <p>Price: ${item.price}</p>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <h3>our items</h3>
        <div>{itemList}</div>
      </div>
    );
  }
}

export default Home;
