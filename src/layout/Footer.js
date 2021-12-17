//TODO: DONE Export the Footer
import React from "react";
import { Container } from "reactstrap";
const Footer = () => {
  return (
    <Container
      fluid
      tag="footer"
      className="text-center text-light text-uppercase fixed-bottom p-3 "
    >
      A Simple Contact App
    </Container>
  );
};
export default Footer;
