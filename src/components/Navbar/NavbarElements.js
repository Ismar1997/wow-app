import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";

export const Nav = styled.nav`
  background: transparent;
  height: 95px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #d3eca7;
  font-size: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  @media screen and (max-width: 700px) {
    font-size: 1.8rem;
    position: absolute;
    top: 20px;
  }
  @media screen and (max-width: 550px) {
    font-size: 1.4rem;
    position: absolute;
    top: 23px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;

  top: 0;
  right: 10px;
  cursor: pointer;
  color: #d3eca7;
  font-size: 20px;
  @media screen and (max-width: 770px) {
    font-size: 0;
    top: 25px;
  }

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(FaAlignJustify)`
  font-size: 2.3rem;
  transform: translate(-50%, -15%);
`;
