import React from "react";
import { render } from "react-snapshot";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

import Container from "./components/Container";
import HeaderContainer from "./components/HeaderContainer";
import Banner from "./components/Banner";
import Home from "./components/Home";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import IconLink from "./components/IconLink";
import Section from "./components/Section";

import Envelope from "react-icons/lib/fa/envelope-o";
import Github from "react-icons/lib/fa/github";

document.body.style.margin = 0;

const App = () =>
  <BrowserRouter>
    <Container>
      <Banner>
        <Home>John Salcedo</Home>
        <Title>The Modern Javascript Developer</Title>
        <Subtitle>
          I will transform your business logic into code. Check my portfolio to
          see what I can do.
        </Subtitle>
        <HeaderContainer>
          <IconLink icon={Github} href="https://github.com/jpls93">
            View Github
          </IconLink>
          <IconLink
            icon={Envelope}
            href="mailto://johnsalcedonetwork@gmail.com"
          >
            Send email
          </IconLink>
        </HeaderContainer>
      </Banner>
      <Section />
    </Container>
  </BrowserRouter>;

render(<App />, document.getElementById("root"));
registerServiceWorker();
