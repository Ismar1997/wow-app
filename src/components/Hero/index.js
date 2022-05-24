import React from "react";
import { useState } from "react";
import NavBar from "../Navbar";
import Sidebar from "../Sidebar";
import {
  HeroContainer,
  HeroBtn,
  HeroH1,
  HeroItems,
  HeroP,
  HeroContent,
} from "./HeroElements";
const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <HeroContainer>
      <NavBar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>GREATEST SWORDS EVER</HeroH1>
          <HeroP>Ready for fight</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
