import React, { useContext } from "react";

import {
  Form,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { ContactContext } from "../context/Context";
import iconimg from "../pages/login.png";
import Footer from "../layout/Footer";
// import person1 from "../pages/person1";
// import person2 from "../pages/person2";
// import person3 from "../pages/person3";
const ViewContact = () => {
  const { state } = useContext(ContactContext);
  // destructuring contact from the state
  // and rendering it in state
  //FIXME: DONE destructure contact from state
  const { contact } = state;
  return (
    <Form>
      <Row className="mt-5 mb-5 ">
        <Col md="6" className="offset-md-3">
          <Card className="p-5 mt-5  home">
            <CardBody className="text-center ">
              <img
                height="150"
                width="150"
                className="cardImg "
                src={contact?.picture ? contact?.picture : iconimg}
              />
              <CardTitle
                className="text-light mt-3"
                style={{ fontWeight: 500 }}
              >
                <h1>{contact?.name}</h1>
              </CardTitle>
              <CardSubtitle>
                <h3
                  className=" mt-4"
                  style={{ color: "#C4EEFF", fontWeight: 400 }}
                >
                  <FaPhone className="mr-2 text-light" size={24} />
                  {contact?.phoneNumber}
                </h3>
              </CardSubtitle>
              <a
                className="btn btn-primary btn-block mt-5"
                style={{ padding: "15px" }}
                target="_blank"
                href={`mailto:{contact?.email}`}
              >
                <FaEnvelope className=" mr-2" color="#4592B3" size={24} />
                {contact?.email}
              </a>

              <a
                className="btn btn-block mt-4"
                style={{ padding: "15px" }}
                target="_blank"
                //TODO: add google maps
                href={`https://www.google.com/maps/place/${contact?.address}`}
              >
                <FaMapMarkerAlt className="mr-2" color="#4592B3" size={24} />
                {contact?.address}
              </a>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Footer />
    </Form>
  );
};

export default ViewContact;
