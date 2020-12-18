import * as React from 'react';
import { Button } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

class SubmitButton extends React.Component {
  render() {
  const buttonTxt = "다음";
    return (
      <Button
        className="button-submit"
        size="medium"
        style={{"backgroundColor": red[400]}}
      >
        {buttonTxt}
      </Button>
    )
  }
}

export default SubmitButton;