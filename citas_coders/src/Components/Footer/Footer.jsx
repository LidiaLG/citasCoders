import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhoneAlt, FaTwitter} from "react-icons/fa";
import './../../Scss/reset.scss';
import '../../Scss/variables.scss';

const Footer = () => {
  return (
    <FooterBox>
      <FooterWrapper>
        <FaEnvelope style = {{color: "333333"}} cursor = "pointer">
        </FaEnvelope>
        <FaPhoneAlt style = {{color: "333333"}} cursor = "pointer"></FaPhoneAlt>
        <FaTwitter style = {{color: "333333"}} cursor = "pointer"></FaTwitter>
      </FooterWrapper>
    </FooterBox>
  )
}

export default Footer

export const FooterBox = styled.div `
  background : #EFF5F5;
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
`;

export const FooterWrapper = styled.div `
  width: 45%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;