/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from "react";
import "./itemList.css";

import Spinner from "../spinner";
import { ItemListInterface } from "../interfece";

// type RequireKeys<T, TNames extends keyof T> = T &
//   { [P in keyof T]-?: P extends TNames ? T[P] : never };
// type ButtonProps2 = RequireKeys<ButtonProps, "onClick">;

export default class ItemList extends Component<ItemListInterface, {}, any> {
  // this.onCharSelected = this.onCharSelected.bind(this);

  state = {
    itemList: null,
  };
  // componentDidMount(): void {
  //   this.updateCharList();
  // }

  // updateCharList(): void {
  //   const { charId }: any = this.props;
  //   if (!charId) {
  //     return;
  //   }
  //   this.gotService.getAllCharacters().then((charList) => {
  //     this.setState({ charList });
  //   });
  //   // this.foo.bar = 0;
  // }

  componentDidMount(): void {
    const { getData } = this.props;

    getData().then((itemList: any): void => {
      this.setState({
        itemList,
      });
    });
  }

  renderItems(arr: any): JSX.Element {
    return !arr
      ? null
      : arr.map(
          (item: any, i: number): JSX.Element => {
            return (
              <li
                key={Math.random() + i}
                className="list-group-item"
                onClick={(): any => this.props.onCharSelected(40 + i)}
              >
                {item.name}
              </li>
            );
          }
        );
  }

  render(): JSX.Element {
    const { itemList }: any = this.state;

    const items = this.renderItems(itemList);

    if (!itemList) {
      return <Spinner />;
    }
    return <ul className="item-list list-group">{items}</ul>;
  }
}
