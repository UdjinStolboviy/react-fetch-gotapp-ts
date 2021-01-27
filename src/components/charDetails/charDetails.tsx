import React, { Component } from "react";
import "./charDetails.css";
import gotService from "../../services/gotService";
import { RandomCharIterface } from "../interfece";

const Field = ({
  char,
  field,
  label,
}: {
  char?: any;
  field: any;
  label: string;
}): JSX.Element => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="term">{label}</span>
      <span>{char[field]}</span>
    </li>
  );
};

export { Field };
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
    const { char }: any = this.state;
    const { name }: any = char;
    return (
      <div className="char-details rounded">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {React.Children.map(this.props.children, (child): any => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, { char });
            }
          })}
        </ul>
      </div>
    );
  }
}

// function children(
//   children: any,
//   arg1: { char: any }
// ): React.DetailedReactHTMLElement<any, HTMLElement> {
//   throw new Error("Function not implemented.");
// }
