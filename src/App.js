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

  componentDidMount = () => {
    console.log(this.circle);
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
