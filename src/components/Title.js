import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  display: block;
  position: relative;
  text-align: center;
  color: white;
  padding: 0 2rem;
  margin: 2rem 0;
  font-size: 3em;
  font-weight: 900;
  font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'avenir next',
    avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial,
    sans-serif;
`;

export default props =>
  <Title>
    {props.children}
  </Title>;
