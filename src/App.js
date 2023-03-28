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

  componentWillUnmount = () => {};

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
