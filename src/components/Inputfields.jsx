//@flow
import * as React from "react";
import {TextField, Select, FormControl, InputLabel, Typography} from "@material-ui/core";

type Props = {
  textFieldDescription: string,
  textFieldValue: string,
  style?: any,
  select?: boolean,
}

class InputField extends React.Component<Props, State> {
  render() {
    return (
      this.props.select ?
        <>
          <FormControl>
            <InputLabel>
              <Typography
                variant="text"
                component="p"
                style={{paddingLeft: "14px"}}
              >
                {this.props.textFieldValue}
              </Typography>
            </InputLabel>
            <Select
              native
              className="input-field"
              name="name"
              variant="outlined"
              value={this.props.textFieldValue}
            >
              <option value="none" disabled>
                1000
              </option>
              <option value="none" disabled>
                2000
              </option>
            </Select>
            <p
              className="input-field-description"
              style={this.props.style}
            >
              {this.props.textFieldDescription}
            </p>
          </FormControl>
        </>
          :
        <>
          <TextField
            className="input-field"
            variant="outlined"
            value={this.props.textFieldValue}
          />
          <p
            className="input-field-description"
            style={this.props.style}
          >
            {this.props.textFieldDescription}
          </p>
      </>
    )
  }
}

export default InputField;