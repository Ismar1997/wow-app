import React from "react";
import {
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";
const Sidebar = (props) => {
  return (
    <SidebarContainer isOpen={props.isOpen}>
      <Icon>
        <CloseIcon onClick={props.toggle} />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Swords</SidebarLink>
        <SidebarLink to="/">Nunchaks</SidebarLink>
        <SidebarLink to="/">Shurikens</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/">Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
