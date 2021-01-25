/* eslint-disable react/require-render-return */
import React, { Component } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Col, Row } from "react-bootstrap";
import ItemList from "../itemList";
import CharDetails from "../charDetails";
import { RandomCharIterface } from "../interfece";
import ErrorMessage from "../errorMessage";
import gotService from "../../services/gotService";

export default class CharacterPage extends Component<
  RandomCharIterface,
  { showRandomChar: boolean; error: boolean }
> {
  gotService = new gotService();
  state: any = {
    selectedChar: 130,
    error: false,
  };

  componentDidCatch(): void {
    console.log("error");
    this.setState({
      error: true,
    });
  }
  onCharSelected = (id: any): any => {
    // eslint-disable-next-line react/no-direct-mutation-state
    this.setState((this.state.selectedChar = id));
  };

  render(): JSX.Element {
    if (this.state.error) {
      return <ErrorMessage />;
    }
    return (
      <Row>
        <Col md="6">
          <ItemList
            onCharSelected={this.onCharSelected}
            getData={this.gotService.getAllCharacters}
          />
        </Col>
        <Col md="6">
          <CharDetails charId={this.state.selectedChar} />
        </Col>
      </Row>
    );
  }
}
