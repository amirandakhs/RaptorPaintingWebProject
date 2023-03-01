/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container, Col } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black">
      
      <Container >
        <Row>
        <Col className="ml-auto mr-auto" md="2">
          <nav className="footer-nav">
            <ul>
              
              <li>
                <a
                  href="http://blog.creative-tim.com/?ref=pkr-footer"
                  target="_blank"
                >
                  <i className="fa fa-facebook-square" style={{"font-size": "2.5em"}} />
                  <p className="d-lg-none">Facebook</p>
                </a>
              </li>
              <li>
                <a
                  href="https://www.creative-tim.com/license?ref=pkr-footer"
                  target="_blank"
                >
                  <i className="fa fa-instagram" style={{"font-size": "2.5em"}} />
                  <p className="d-lg-none">Instagram</p>
                </a>
              </li>
            </ul>
          </nav>
          </Col>
        </Row>
        <hr />
        <Row>
        <Col className="ml-auto mr-auto" md="4"><div className="ml-auto mr-auto">
          <h3>Raptor Coating Perth</h3>
            <br/>
            <p style={{ fontSize: 13 }}>
            You Imaging We make it
            </p>

           <p style={{ fontSize: 13 }}>
             Simply best in WA
           </p>
           </div>
          
        </Col>
        <Col className="ml-auto mr-auto" md="4">
        <iframe
                      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3388.820882842161!2d115.8942550147842!3d-31.85708902489312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDUxJzI1LjUiUyAxMTXCsDUzJzQ3LjIiRQ!5e0!3m2!1sen!2snl!4v1677009918630!5m2!1sen!2snl"
                      width="300"
                      height="200"
                      style={{ border: 0,borderRadius:25 }}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
          
        </Col>
        <Col className="ml-auto mr-auto" md="4">
        <div className="ml-auto mr-auto">
          <h3>Contact</h3>
            <br/>
            <p style={{ fontSize: 13 }}>
            {" "}
            <li className="fa fa-home mr-3 "></li>
            27 Century Rd, Malaga WA 6090
            </p>

           <p style={{ fontSize: 13 }}>
             <li class="fa fa-phone mr-3"></li> phone number
           </p>
           </div>
        </Col>
        <div className="ml-auto mr-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Amir
            </span>
        </div>
        
        </Row>
      </Container>

    </footer>
  );
}

export default DemoFooter;
