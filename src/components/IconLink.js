import React from "react";
import styled from "styled-components";

const IconLink = styled.a`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #ffcc80;
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica,
    Arial, sans-serif;
  margin: 0 0.25rem;
  padding: 0 0.5rem;
  &:hover {
    color: white;
  }
`;

const IconContainer = styled.span`
  display: inline-flex;
  position: relative;
  margin-right: 0.25rem;
  justify-content: center;
  align-items: center;
`;

export default props => {
  console.log(props.icon());
  return (
    <IconLink href={props.href}>
      <IconContainer>
        {React.createElement(props.icon, {
          size: "20"
        })}
      </IconContainer>
      {props.children}
    </IconLink>
  );
};
