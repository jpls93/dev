import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.div`
  display: block;
  position: relative;
  margin: 2rem auto;
  padding: 0 2rem;
  max-width: 768px;
  ul {
    padding: 0;
  }
  h2,
  ul li {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica,
      Arial, sans-serif;
  }
  ul li a {
    color: #0059b2;
    text-decoration: none;
  }
`;

const SectionHeader = styled.h2`
  display: inline-block;
  position: relative;
  background-color: #9b6b6b;
  border-radius: 999px;
  font-weight: 100;
  font-size: 1rem;
  padding: 0.25rem 1rem;
  color: white;
`;

const SectionList = styled.ul`
  display: block;
  position: relative;
`;

const SectionListItem = styled.li`
  display: block;
  position: relative;
  line-height: 1.4;
  margin: 1rem 0;
`;

export default () =>
  <Section>
    <SectionHeader>Articles</SectionHeader>
    <SectionList>
      <SectionListItem>
        <Link to="#">
          Authentication in a Modern Javascript Application Option A - Firebase
        </Link>
      </SectionListItem>
      <SectionListItem>
        <Link to="#">
          Authentication in a Modern Javascript Application Option B - Passport,
          OAuth, MongoDB
        </Link>
      </SectionListItem>
      <SectionListItem>My first title</SectionListItem>
      <SectionListItem>My first title</SectionListItem>
    </SectionList>
  </Section>;
