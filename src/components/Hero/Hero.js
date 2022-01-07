import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { Div1 } from '../Header/HeaderStyles';
import { LeftSection, customSection } from './HeroStyles';
import { resume } from '../../constants/constants';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        <h5>Hi, I'm </h5>  
        Thamal Wijetunge 😍👋
        </SectionTitle>
        <SectionText>
        Thamal is a software engineer, who is capeble of doing what you need over his technologies.
        </SectionText>
        <a href={resume} target="_blank"><Button onClick={props.handleClick}>Resume</Button></a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;