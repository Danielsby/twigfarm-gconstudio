//@flow
import * as React from "react";
import {TextField} from "@material-ui/core";

type Props = {
  inputFieldDescription: string,
  textFieldValue: string,
  style?: any,
}

class InputField extends React.Component<Props> {
  render() {
    return (
      <div>
        <TextField
          className="input-field"
          variant="outlined"
          value={this.props.textFieldValue}
        />
        <p
          className="input-field-description"
          style={this.props.style}
        >
          {this.props.inputFieldDescription}
        </p>
      </div>
    )
  }
}

export default InputField;