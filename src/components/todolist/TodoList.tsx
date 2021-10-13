import * as React from "react";
import "./TodoList.css";

import ReactCSSTransitionGroup from "react-addons-css-transition-group";

type State = {
  items: string[];
  willAdd: string;
};
export default class TodoList extends React.Component<{}, State> {
  state = { items: ["hello", "world", "click", "me"], willAdd: "" };

  handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ ...this.state, willAdd: event.currentTarget.value });
  };

  handleAdd = (): void => {
    if (this.state.willAdd !== "") {
      const newItems = this.state.items.concat(this.state.willAdd);
      this.setState({ items: newItems, willAdd: "" });
    }
  };

  handleRemove = (i: number): void => {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({ ...this.state, items: newItems });
  };

  render() {
    const items = this.state.items.map((item, i) => (
      <div className="todo-item" key={i} onClick={() => this.handleRemove(i)}>
        <span/>{item}
      </div>
    ));

    return (
      <div className="todo-list">
        <div className="add-list">
          <label>
            <input
              className="todo-input"
              type="text"
              value={this.state.willAdd}
              onChange={this.handleChange}
              placeholder="Please add some things"
            />
          </label>
          <button onClick={this.handleAdd}>Add</button>
        </div>
        <ReactCSSTransitionGroup
          transitionName="list-animation"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
