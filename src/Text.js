import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import styled from "styled-components";

const TextH1 = styled.h1``;

export default function Text() {
  const text = useRef(null);

  const hoverEvent = (event) => {
    console.log(event.target);
    console.log(text.current);

    text.current.style.background = "yellow";
  };

  useEffect(() => {
    text.current.addEventListener("mouseover", hoverEvent);

    return () => {
      text.current.removeEventListener("mouseover", hoverEvent);
    };
  }, [text]);

  return <TextH1 ref={text}>텍스트 입니다!</TextH1>;
}
