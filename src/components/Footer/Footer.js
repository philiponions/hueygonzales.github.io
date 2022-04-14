import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email me at</LinkTitle>
          <LinkItem>hueycoy@outlook.com</LinkItem>
          <LinkTitle>Phone Number</LinkTitle>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <SocialContainer>
          <SocialContainer>
            <SocialIcons href = "https://github.com/philiponions">
              <AiFillGithub size = "3rem"/>
            </SocialIcons>
            <SocialIcons href = "https://www.linkedin.com/in/huey-gonzales-30bab7228/">
              <AiFillLinkedin size = "3rem"/>
            </SocialIcons>
            <SocialIcons href = "https://www.youtube.com/channel/UC2FDS53JIItrTjyh_NqLjSw">
              <AiFillYoutube size = "3rem"/>
            </SocialIcons>
          </SocialContainer>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
