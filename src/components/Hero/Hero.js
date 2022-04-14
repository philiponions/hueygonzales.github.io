import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi there! I'm <br/>
        Huey Gonzales
      </SectionTitle>
      <SectionText>
        I have a passion for Software Development and love helping people with it.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;