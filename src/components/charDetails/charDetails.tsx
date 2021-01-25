import React, { Component } from "react";
import "./charDetails.css";
import gotService from "../../services/gotService";
import { RandomCharIterface } from "../interfece";

export default class CharDetails extends Component<RandomCharIterface> {
  gotService = new gotService();

  state = {
    char: null,
  };
  foo: any;

  componentDidMount(): void {
    this.updateChar();
  }

  updateChar(): void {
    const { charId }: any = this.props;
    if (!charId) {
      return;
    }
    this.gotService.getCharacter(charId).then((char) => {
      this.setState({ char });
    });
    // this.foo.bar = 0;
  }

  render(): JSX.Element {
    if (!this.state.char) {
      return <span className="select-error">Plecse select a chracter</span>;
    }

    const { name, gender, born, died, culture }: any = this.state.char;
    return (
      <div className="char-details rounded">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Born</span>
            <span>{born}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Died</span>
            <span>{died}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Culture</span>
            <span>{culture}</span>
          </li>
        </ul>
      </div>
    );
  }
}
