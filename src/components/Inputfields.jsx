//@flow
import * as React from "react";
import {TextField} from "@material-ui/core";
import { red } from "@material-ui/core/colors";

type Props = {
  inputFieldText: string
}

class InputField extends React.Component<Props> {
  render() {
    return (
      <div>
        <TextField variant="outlined"/>
        <p style={{color: red[400]}}>{this.props.inputFieldText}</p>
      </div>
    )
  }
}

export default InputField;