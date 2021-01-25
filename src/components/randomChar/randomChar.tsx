/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Component } from "react";
import "./randomChar.css";
import gotService from "../../services/gotService";
import { RandomCharIterface } from "../interfece";
import Spinner from "../spinner";
import ErrorMessage from "../errorMessage";

import { TransformType } from "../interfece";

// type MyState = {
//   name: null;
//   gender: null;
//   born: null;
//   died: null;
//   culture: null;
// };

export default class RandomChar extends Component<RandomCharIterface> {
  timerId: any;
  constructor(props: RandomCharIterface) {
    super(props);

    console.log("Constructor");
  }

  gotService = new gotService();
  state = {
    char: {},
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.updateChars();
    this.timerId = setInterval(this.updateChars, 1500);
  }

  componentDidUpdate(prevProps: any) {
    if (this.props.charId !== prevProps.charId) {
      this.updateChars();
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  onCharLoaded = (char: any) => {
    this.setState({ char, loading: false });
  };

  onError = (err: string): void => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  updateChars = (): void => {
    const id = Math.floor(Math.random() * 140 + 25); // 25 - 140
    this.gotService
      .getCharacter(id)
      .then(this.onCharLoaded)
      .catch(this.onError);
  };

  render(): JSX.Element {
    console.log("Render");
    const { char, loading, error }: any = this.state;

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? <View char={char} /> : null;

    return (
      <div className="random-block rounded">
        {spinner}
        {errorMessage}
        {content}
      </div>
    );
  }
}
const View = ({ char }: TransformType) => {
  const { name, gender, born, died, culture }: any = char;
  return (
    <>
      <h4>Random Character: {name}</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Gender </span>
          <span>{gender}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Born </span>
          <span>{born}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Died </span>
          <span>{died}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Culture </span>
          <span>{culture}</span>
        </li>
      </ul>
    </>
  );
};
