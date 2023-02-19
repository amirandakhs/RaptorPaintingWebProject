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
// import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/raptor-img/landing-img.jpg") + ")"
        }}
      >
        <div className="filter" />
        {/* <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Paper Kit React</h1>
              <div className="fog-low">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
            </div>
            <h2 className="presentation-subtitle text-center">
              Make your mark with a Free Bootstrap 4 (Reactstrap) UI Kit!
            </h2>
          </Container>
        </div> */}
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")"
          }}
        />
        <h3 style={{
            color:"#0a0"
          }} className="category category-absolute">
          AUTOMOTIVE STUDIO
        </h3>
      </div>
    </>
  );
}

export default IndexHeader;
