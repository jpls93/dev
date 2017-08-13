import React from "react";
import styled from "styled-components";

const Home = styled.a`
  position: relative;
  display: inline-block;
  margin: 2rem 0 0 0;
  text-align: center;
  left: 50%;
  transform: translate(-50%, 0);
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  font-weight: 900;
  font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'avenir next',
    avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial,
    sans-serif;

  @media screen and (min-width: 768px) {
    left: 0;
    transform: none;
    margin: 2rem 0 0 2rem;
    &::visited {
      color: inherit;
    }
  }
`;

export default props =>
  <Home href="/">
    {props.children}
  </Home>;
