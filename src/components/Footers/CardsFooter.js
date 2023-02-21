/*!

=========================================================
* Argon Design System React - v1.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardImg,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import Map from "../map/Map";

class CardsFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer ">
          <Container>
            <Col className="text-center btn-wrapper my-md">
              <Button
                className="btn-icon-only rounded-circle"
                color="twitter"
                href="https://twitter.com/creativetim"
                id="tooltip475038074"
                target="_blank"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-twitter" />
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip475038074">
                Follow us
              </UncontrolledTooltip>
              <Button
                className="btn-icon-only rounded-circle ml-1"
                color="facebook"
                href="https://www.facebook.com/creativetim"
                id="tooltip837440414"
                target="_blank"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-facebook-square" />
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip837440414">
                Like us
              </UncontrolledTooltip>
              <Button
                className="btn-icon-only rounded-circle ml-1"
                color="dribbble"
                href="https://dribbble.com/creativetim"
                id="tooltip829810202"
                target="_blank"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-instagram" />
                </span>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip829810202">
                Follow us
              </UncontrolledTooltip>
            </Col>
            {/* </Row> */}
            <hr />
            <div className="main-footer">
              <div className="container">
                <div className="row">
                  <div className="col-md-3 col-sm-6">
                    <h4>COMPANY NAME</h4>
                    <p>explain a little about the company</p>
                  </div>
                  <div className="map-container">
                    <Map />
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <h4>CONTACT</h4>
                    <ul className="unstyled"></ul>
                    <p>
                      <li class="fa fa-home mr-3"></li> address: 27 Century Rd,
                      Malaga WA 6090
                    </p>
                    <p>
                      <li class="fa fa-phone mr-3"></li> phone number
                    </p>
                  </div>
                  <div className="col-md-3 col-sm-6"></div>
                </div>
                <Col>
                  <div className="copyright text-center p-4">
                    © {new Date().getFullYear()} Copyright:
                    <a
                      className="ml-2"
                      href="https://www.creative-tim.com?ref=adsr-footer"
                      target="_blank"
                    >
                      raptorcoatingperth.com.au
                    </a>
                  </div>
                </Col>
              </div>
            </div>
          </Container>
        </footer>
      </>
    );
  }
}

export default CardsFooter;
