import React, { Component } from "react";
import "./itemList.css";
import Spinner from "../spinner";
import { ItemListInterface } from "../interfece";
import gotService from "../../services/gotService";

function ItemList(props: any): JSX.Element | { data: any } {
  function renderItems(arr: any) {
    return arr.map((item: any) => {
      const { id } = item;

      const label = props.renderItem(item);

      return (
        <li
          key={id}
          className="list-group-item"
          onClick={() => props.onItemSelected(id)}
        >
          {label}
        </li>
      );
    });
  }
  const { data }: any = props;

  const items = renderItems(data);
  return (
    <>
      <ul className="item-list list-group">{items}</ul>
    </>
  );
}

// ItemList.defaultProps = {
//   onItemSelected: () => {},
// }
//
const withData = (View: any, getData: () => Promise<any>) => {
  return class extends Component<ItemListInterface, {}, any> {
    state = {
      data: null,
    };
    // static defaultProps: { onItemSelected: () => void; };

    componentDidMount() {
      getData().then((data: any) => {
        this.setState({
          data,
        });
      });
    }
    render(): JSX.Element {
      const { data } = this.state;

      if (!data) {
        return <Spinner />;
      }
      return <View {...this.props} data={data} />;
    }
  };
};

const { getAllCharacters } = new gotService();
export default withData(ItemList, getAllCharacters);
