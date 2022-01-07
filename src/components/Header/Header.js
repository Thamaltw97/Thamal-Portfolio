import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck, DiUbuntu } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "block", alignItems: "center", color: "white" }}>
          <DiUbuntu size="3rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2 style={{ marginTop: "5px" }}>
      <li style={{marginRight: '2.5rem'}}>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li style={{marginRight: '2.5rem'}}>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li style={{marginRight: '2.5rem'}}>
        <Link href="#experience">
          <NavLink>Experience</NavLink>
        </Link>
      </li>
      <li style={{marginRight: '2.5rem'}}>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contact">
          <NavLink>Contact</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Thamaltw97" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://linkedin.com/in/thamaltw97/" target="_blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/thamaltw_97/" target="_blank">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
