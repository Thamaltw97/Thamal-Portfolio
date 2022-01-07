import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { FaMobileAlt, FaDocker } from 'react-icons/fa';
import { AiOutlineCloudSync } from 'react-icons/ai';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From Front-end To Back-end
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            ReactJS / JavaScript / <br />
            HTML / CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            NodeJS / C# / Java / <br />
            MongoDB / Oracle / SQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaMobileAlt size="2.5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Mobile</ListTitle>
          <ListParagraph>
            Experience with <br />
            Android / Flutter
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like AdobeXD
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <AiOutlineCloudSync size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Cloud</ListTitle>
          <ListParagraph>
            Experience with <br />
            Google Co-lab / MongoDB Atlas/ Azure
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaDocker size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Microserevices</ListTitle>
          <ListParagraph>
            Experience with <br />
            Docker / Kubernetes
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <br />
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
