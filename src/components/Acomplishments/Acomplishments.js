import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data1 = [
  { number: "Bachelors", text: 'Bachelor of Science (Honours) in Information Technology Specialising in Software Engineering', }
];

const data2 = [
  { number: "Advance Level", text: 'Completed Advance Level education with Combine Mathematics, Physics and Chemistry'}
];

const Acomplishments = () => (
  <Section>
    <SectionTitle style={{ marginTop: "-30px" }}>Education</SectionTitle>
    <Boxes style={{ width: "3000px" }}>
      {data1.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <Boxes style={{ width: "3000px", marginTop: "-20px" }}>
      {data2.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <br />
    <br />
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
