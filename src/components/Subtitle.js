import React from "react";
import styled from "styled-components";

const Subtitle = styled.p`
  display: block;
  position: relative;
  padding: 0 2rem;
  text-align: center;
  color: white;
  font-size: 1rem;
  line-height: 1.4;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica,
    Arial, sans-serif;
`;

export default props =>
  <Subtitle>
    {props.children}
  </Subtitle>;
