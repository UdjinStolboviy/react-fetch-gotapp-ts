import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ErrorMessage from "../errorMessage";
import { CharacterPage, BooksPage, HousesPage, BooksItem } from "../pages";
import gotService from "../../services/gotService";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { RandomCharIterface } from "../interfece";
import { Button } from "react-bootstrap";

import "./app.css";

export default class App extends Component<
  RandomCharIterface,
  { showRandomChar: boolean; error: boolean },
  any
> {
  gotService = new gotService();

  state = {
    showRandomChar: true,
    error: false,
    selectedHouse: 20,
  };

  componentDidCatch() {
    console.log("error");
    this.setState({
      error: true,
    });
  }

  toggleRandomChar = () => {
    this.setState((state) => {
      return {
        showRandomChar: !state.showRandomChar,
      };
    });
  };

  render(): JSX.Element {
    const char = this.state.showRandomChar ? <RandomChar /> : null;

    if (this.state.error) {
      return <ErrorMessage />;
    }

    return (
      <Router>
        <div className="app">
          <Container>
            <Header />
          </Container>
          <Container>
            <Row>
              <Col lg={{ span: 5, offset: 0 }}>
                {char}
                <Button
                  variant="outline-secondary"
                  className="toggle-btn"
                  onClick={this.toggleRandomChar}
                >
                  Toggle random character
                </Button>
              </Col>
            </Row>
            <Route
              path="/"
              component={() => <h1>Welcome to GOT DB</h1>}
              exact
            />
            <Route path="/characters" component={CharacterPage} />
            <Route path="/books" component={BooksPage} exact />
            <Route
              path="/books/:id"
              render={({ match }) => {
                const { id } = match.params;
                return <BooksItem bookId={id - 40} />;
              }}
            />
            <Route path="/houses" component={HousesPage} />
          </Container>
        </div>
      </Router>
    );
  }
}
