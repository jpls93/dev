import React from "react";
import styled from "styled-components";
import { load } from "webfontloader";

load({
  google: {
    families: ["Montserrat"]
  }
});

const Banner = styled.div`
  @media screen and (max-width: 568px) {
    background-image: linear-gradient(
      to top left,
      #414141 0,
      #414141 50%,
      #3d3d3d 0
    );
  }
  display: block;
  position: relative;
  min-height: 50vh;
  padding-bottom: 5rem;
  background: linear-gradient(162deg, #414141, #414141 41%, #3d3d3d 0);

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -16px;
    border-bottom: 19px solid white;
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
  }
`;

export default props =>
  <Banner>
    {props.children}
  </Banner>;
