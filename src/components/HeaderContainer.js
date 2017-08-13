import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;
`;

export default props =>
  <Container>
    {props.children}
  </Container>;
