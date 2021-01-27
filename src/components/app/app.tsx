/* eslint-disable no-labels */
/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Header from "../header";
import RandomChar from "../randomChar";

import ItemList from "../itemList";
import CharDetails from "../charDetails";
import gotService from "../../services/gotService";

import Button from "react-bootstrap/Button";
import "./app.scss";
import ErrorMessage from "../errorMessage";
import { RandomCharIterface } from "../interfece";
import CharacterPage from "../characterPage";

// eslint-disable-next-line import/no-anonymous-default-export
export default class App extends Component<
  RandomCharIterface,
  { showRandomChar: boolean; error: boolean },
  any
> {
  gotService = new gotService();
  state = {
    showRandomChar: true,
    selectedChar: 130,
    error: false,
  };

  toggleRandomChar = () => {
    this.setState((state): { showRandomChar: boolean } => {
      return {
        showRandomChar: !state.showRandomChar,
      };
    });
  };
  onItemSelected!: (...i: any[]) => any;

  render(): JSX.Element {
    const char = this.state.showRandomChar ? <RandomChar /> : null;

    return (
      <>
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{ span: 5, offset: 0 }}>{char}</Col>
            <Button
              className="button-chars"
              variant="light"
              onClick={this.toggleRandomChar}
            >
              Toggle random character
            </Button>
          </Row>
          <CharacterPage />
          <Row>
            <Col md="6">
              <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllBooks}
                renderItem={(item) => item.name}
                // renderItem={(item) => (
                //   <>
                //     <span>{item.name}</span>
                //     <button>Click me</button>
                //   </>
                // )}
              />
            </Col>
            <Col md="6">
              <CharDetails charId={this.state.selectedChar} />
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllHouses}
                renderItem={(item) => item.name}
              />
            </Col>
            <Col md="6">
              <CharDetails charId={this.state.selectedChar} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
