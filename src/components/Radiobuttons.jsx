import * as React from 'react';
import {Radio} from "@material-ui/core";

type Props = {
  name: string,
}
class RadioButton extends React.Component<Props> {
  render() {
    return (
      <div>
        <Radio />
      </div>
    )
  }
}

export default RadioButton;