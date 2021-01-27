/* eslint-disable react/require-render-return */
import React, { Component } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import ItemList from "../itemList";
import CharDetails, { Field } from "../charDetails";
import { RandomCharIterface } from "../interfece";
import ErrorMessage from "../errorMessage";
import gotService from "../../services/gotService";
import RowBlock from "../rowBlock";

export default class CharacterPage extends Component<RandomCharIterface, {}> {
  gotService = new gotService();

  state = {
    selectedChar: 130,
    error: false,
  };

  componentDidCatch(): void {
    console.log("error");
    this.setState({
      error: true,
    });
  }
  onItemSelected = (id: number): any => {
    // eslint-disable-next-line react/no-direct-mutation-state
    // this.setState((this.state.selectedChar = id));
    this.setState({ selectedChar: id });
  };

  render(): JSX.Element {
    if (this.state.error) {
      return <ErrorMessage />;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.gotService.getAllCharacters}
        renderItem={({ name, gender }) => `${name} (${gender})`}
      />
    );
    const charDetails = (
      <CharDetails charId={this.state.selectedChar}>
        <Field field="gender" label="Gender" />
        <Field field="born" label="Born" />
      </CharDetails>
    );

    return <RowBlock left={itemList} right={charDetails} />;
  }
}
