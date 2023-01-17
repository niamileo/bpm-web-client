import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import HomeIcon from "components/SVG/Home.svg";
import BoxIcon from "components/SVG/Box.svg";

type NavItemType = {
  href: string;
  text: string;
  icon?: JSX.Element;
  className?: string;
};

/**
 * @type {NavItemType[]}
 */
const links = [
  { href: "/", text: "Home", icon: <HomeIcon /> },
  { href: "/projects", text: "Projects", icon: <BoxIcon /> },
];

const createNavItem = ({ href, text, className, icon }: NavItemType) => (
  <NavItem key={text}>
    <NavLink href={href} className={className}>
      {icon}
      {text}
    </NavLink>
  </NavItem>
);

export default function SampleNav() {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!isOpen);

  return (
    <div>
      <Navbar color="white" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {links.map(createNavItem)}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
