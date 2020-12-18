//@flow
import * as React from "react";
import SubmitButton from "../components/SubmitButton";
import InputField from "../components/Inputfields";
import {Radio,RadioGroup, FormControlLabel, FormControl, FormLabel} from "@material-ui/core";

type Props = {
  formTitle?: string,
  formDescription?: string,
  inputInformation?: Array<string>,
  radioButtonsInformation?: Array<string>,
  buttonInformation?: string
}

type State = {
  selectedValue: string,
}

class Form extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      selectedValue: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: Event) {
    if (event.target?.value) {
      this.setState({selectedValue: event.target.value});
    }
  }

  render() {
    const selectedValue = this.state.selectedValue;

    return (
      <div className="form">
        <header className="form__title">
          <h2>{this.props.formTitle}</h2>
          <p>{this.props.formDescription}</p>
        </header>

        <section className="form__radio">
          <FormControl>
            <RadioGroup row value={selectedValue} onChange={this.handleChange}>
              <FormControlLabel
                checked={selectedValue === "a"}
                value="a"
                control={<Radio />}
                labelPlacement="right"
                label="번역회사"
              />
              <FormControlLabel
                checked={selectedValue === "b"}
                value="b"
                control={<Radio />}
                labelPlacement="right"
                label="의뢰인"
              />
              <FormControlLabel
                checked={selectedValue === "c"}
                value="c"
                control={<Radio />}
                labelPlacement="right"
                label="번역가"
              />
            </RadioGroup>
          </FormControl>
        </section>

        <section className="form__fields">
          <p>기본정보 입력</p>
          <InputField inputFieldText={this.props.inputInformation[0]}/>
          <InputField inputFieldText={this.props.inputInformation[1]}/>
          <InputField inputFieldText={this.props.inputInformation[2]}/>
          <InputField inputFieldText={this.props.inputInformation[3]}/>
          <InputField inputFieldText={this.props.inputInformation[4]}/>
        </section>

        <article className="form__buttons">
          <SubmitButton />
        </article>
      </div>
    )
  }
}

export default Form;