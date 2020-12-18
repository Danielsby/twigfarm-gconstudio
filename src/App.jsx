//@flow
import './App.scss';
import * as React from "react";
import Form from "./form/Form";

class App extends React.Component {
  inputInformation = [
    "이메일 양식을 획인하세요",
    "비밀번호는 8자리 이상, 16자리 이하이고, 숫자, 특수문자가 각 1자리 이상 포함되어야 합니다",
    "이베일 양식을 획인하세요",
    "필수 입력사항입니다",
    "필수 입려사항입니다"
  ]

  render() {
    const formTitle = "Gconstudio 졔정 만들기";
    const formDescription = "하나의 계정으로 모든 지콘스튜디오 서비스를 이용할 수 있습니다";
    return (
      <div className="twigfarm">
        <main className="twigfarm__content">
          <Form
            formTitle={formTitle}
            inputInformation={this.inputInformation}
            formDescription={formDescription}
          />
        </main>
      </div>
    )
  }
}

export default App;
