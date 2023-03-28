import React from "react";
import styled from "styled-components";
import Text from "./Text";

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
`;

const Circle = styled.div`
  width: 250px;
  height: 250px;
  background-color: green;
  margin: auto;
  border-radius: 250px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.circle = React.createRef(null);
  }

  hoverEvent = (event) => {
    console.log(event.target);
    console.log(this.circle.current);
    // event target과 this.circle.current가 같은지 확인해볼 거임.
    // 같다는 걸 확인할 수 있음.

    this.circle.current.style.background = "yellow";
  };

  componentDidMount = () => {
    console.log(this.circle);
    // {current: div}
    this.circle.current.addEventListener("mouseover", this.hoverEvent);
    // addEventListener(어떤 이벤트가 실행될지, 어떤 행동을 할 것인지(함수 형태))
  };

  componentWillUnmount = () => {
    this.circle.current.removeEventListener("mouseover", this.hoverEvent);
    // 컴포넌트가 사라졌다가 생기면 event listener가 또 생기게 됨.
    // mouseover를 한 번만 했음에도 불구하고 mouseover를 한 100번 한 것처럼 event가 계속 올라갈 수도 있다는 얘기.
    // 이러한 현상을 막기 위하여 event listener를 등록했으면 컴포넌트가 사라질 때는 event listener를 지워줘야 함.
  };

  render() {
    return (
      <Wrap>
        <Text />
        <Circle ref={this.circle} />
      </Wrap>
    );
  }
}

export default App;
