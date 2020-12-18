//@flow
import * as React from "react";
import SubmitButton from "../components/SubmitButton";
import InputField from "../components/Inputfields";
import {Radio,RadioGroup, FormControlLabel, FormControl, Typography} from "@material-ui/core";

type Props = {
  formTitle?: string,
  formDescription?: string,
  textFieldDescription?: Array<string>,
  radioButtonsInformation?: Array<string>,
  inputFieldValue?: Array<string>
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
          <h2 className="headline">{this.props.formTitle}</h2>
          <p className="description">{this.props.formDescription}</p>
        </header>

        <section className="form__radio">
          <FormControl>
            <RadioGroup row value={selectedValue} onChange={this.handleChange}>
              <FormControlLabel
                className="radio-button"
                checked={selectedValue === "company"}
                value="company"
                control={<Radio />}
                labelPlacement="right"
                label={
                  <Typography
                    variant="text"
                    component="p"
                    style={selectedValue === "company" ? {fontWeight: "bold"} : null}
                  >
                    번역회사
                  </Typography>
                }
              />
              <FormControlLabel
                className="radio-button"
                checked={selectedValue === "client"}
                value="client"
                control={<Radio />}
                labelPlacement="right"
                label={
                  <Typography
                    variant="text"
                    component="p"
                    style={selectedValue === "client" ? {fontWeight: "bold"} : null}
                  >
                    의뢰인
                  </Typography>
                }
              />
              <FormControlLabel
                className="radio-button"
                checked={selectedValue === "translator"}
                value="translator"
                control={<Radio />}
                labelPlacement="right"
                label={
                  <Typography
                    variant="text"
                    component="p"
                    style={selectedValue === "translator" ? {fontWeight: "bold"} : null}
                  >
                    번역가
                  </Typography>
                }
              />
            </RadioGroup>
          </FormControl>
        </section>

        <section className="form__fields">
          <p style={{fontSize: "12px"}}>기본정보 입력</p>
          <InputField
            textFieldDescription={this.props.textFieldDescription[0]}
            textFieldValue={this.props.textFieldValue[0]}
          />
          <InputField
            textFieldDescription={this.props.textFieldDescription[1]}
            textFieldValue={this.props.textFieldValue[1]}
            select={false}
          />
          <InputField
            textFieldDescription={this.props.textFieldDescription[2]}
            textFieldValue={this.props.textFieldValue[2]}
            select={false}
          />
          <InputField
            textFieldDescription={this.props.textFieldDescription[3]}
            textFieldValue={this.props.textFieldValue[3]}
            select={true}
          />
          <InputField
            textFieldDescription={this.props.textFieldDescription[4]}
            textFieldValue={this.props.textFieldValue[4]}
            style={{marginBottom: "10px"}}
            select={true}
          />
        </section>

        <article className="form__buttons">
          <SubmitButton />
          <span className="login">로그인</span>
        </article>
      </div>
    )
  }
}

export default Form;