import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: block;
  position: relative;
`;

export default props =>
  <Container>
    {props.children}
  </Container>;
