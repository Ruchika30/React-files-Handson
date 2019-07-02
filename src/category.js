import React, { Component } from "react";
import "./category.css";
export default class Category extends Component {
  state = {
    selected: [],
    categoryItems: [
      { id: "red", name: "red", isActive: false },
      { id: "blue", name: "blue", isActive: false },
      { id: "yellow", name: "yellow", isActive: false },
      { id: "gray", name: "gray", isActive: false },
      { id: "pink", name: "pink", isActive: false },
      { id: "black", name: "black", isActive: false }
    ]
  };

  handleSelect = item => {
    let { categoryItems } = this.state;
    let selected = [];
    categoryItems = categoryItems.map(category => {
      if (category.id == item.id) {
        category.isActive = !category.isActive;
        debugger;
        return category;
      } else {
        return category;
      }
    });
    selected = categoryItems.filter(category => category.isActive);
    this.setState({ categoryItems, selected });
  };

  render() {
    let { categoryItems } = this.state;

    return (
      <div className="main">
        {categoryItems.map(item => (
          <div
            className={`item ${item.isActive ? "active" : ""}`}
            key={item.id}
            onClick={() => this.handleSelect(item)}
          >
            {item.name}
          </div>
        ))}
      </div>
    );
  }
}
