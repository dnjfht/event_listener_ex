import React from "react";
import styled from "styled-components";

const TextH1 = styled.h1``;

export default function Text() {
  const text = React.useRef(null);

  return <TextH1 ref={text}>텍스트 입니다!</TextH1>;
}
