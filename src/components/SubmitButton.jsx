import * as React from 'react';
import { Button } from "@material-ui/core";

class SubmitButton extends React.Component {
  render() {
  const buttonTxt = "다음";
    return (
      <Button
        className="button-submit"
        size="medium"
      >
        {buttonTxt}
      </Button>
    )
  }
}

export default SubmitButton;