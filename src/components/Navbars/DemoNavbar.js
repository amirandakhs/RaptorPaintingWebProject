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
// import React from "react";
// import { Link } from "react-router-dom";
// // JavaScript plugin that hides or shows a component based on your scroll
// import Headroom from "headroom.js";
// // reactstrap components
import {
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
// import Logo from "../../images/logo.jpg";
// class DemoNavbar extends React.Component {
//   componentDidMount() {
//     let headroom = new Headroom(document.getElementById("navbar-main"));
//     // initialise
//     headroom.init();
//   }
//   state = {
//     collapseClasses: "",
//     collapseOpen: false,
//   };

//   onExiting = () => {
//     this.setState({
//       collapseClasses: "collapsing-out",
//     });
//   };

//   onExited = () => {
//     this.setState({
//       collapseClasses: "",
//     });
//   };

//   render() {
//     return (
//       <>
//         <header className="header-global">
//           <Navbar
//             className="navbar-main navbar-transparent navbar-dark headroom "
//             expand="lg"
//             id="navbar-main"
//           >
//             <Container>
//               <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
//                 {/* <img alt="Raptor Coating Perth Logo" src={Logo} /> */}
//               </NavbarBrand>
//               <button className="navbar-toggler" id="navbar_global">
//                 <span className="navbar-toggler-icon" />
//               </button>
//               <UncontrolledCollapse
//                 toggler="#navbar_global"
//                 navbar
//                 className={this.state.collapseClasses}
//                 onExiting={this.onExiting}
//                 onExited={this.onExited}
//               >
//                 <div className="navbar-collapse-header">
//                   <Row>
//                     <Col className="collapse-brand" xs="6">
//                       <Link to="/">
//                         {/* <img alt="Raptor Coating Perth Logo" src={Logo} /> */}
//                       </Link>
//                     </Col>
//                     <Col className="collapse-close" xs="6">
//                       <button className="navbar-toggler" id="navbar_global">
//                         <span />
//                         <span />
//                       </button>
//                     </Col>
//                   </Row>
//                 </div>
//                 <Nav className="navbar-nav-hover align-items-lg-center" navbar>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#">
//                       Portfolio
//                     </a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#">
//                       Book Now
//                     </a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="#">
//                       Contact Us
//                     </a>
//                   </li>
//                 </Nav>
//                 <Nav className="align-items-lg-center ml-lg-auto" navbar>
//                   <NavItem>
//                     <NavLink
//                       className="nav-link-icon"
//                       href="https://www.facebook.com/creativetim"
//                       id="tooltip333589074"
//                       target="_blank"
//                     >
//                       <i className="fa fa-facebook-square" />
//                       <span className="nav-link-inner--text d-lg-none ml-2">
//                         Facebook
//                       </span>
//                     </NavLink>
//                     <UncontrolledTooltip delay={0} target="tooltip333589074">
//                       Like us on Facebook
//                     </UncontrolledTooltip>
//                   </NavItem>
//                   <NavItem>
//                     <NavLink
//                       className="nav-link-icon"
//                       href="https://www.instagram.com/creativetimofficial"
//                       id="tooltip356693867"
//                       target="_blank"
//                     >
//                       <i className="fa fa-instagram" />
//                       <span className="nav-link-inner--text d-lg-none ml-2">
//                         Instagram
//                       </span>
//                     </NavLink>
//                     <UncontrolledTooltip delay={0} target="tooltip356693867">
//                       Follow us on Instagram
//                     </UncontrolledTooltip>
//                   </NavItem>
//                   <NavItem>
//                     <NavLink
//                       className="nav-link-icon"
//                       href="https://twitter.com/creativetim"
//                       id="tooltip184698705"
//                       target="_blank"
//                     >
//                       <i className="fa fa-twitter-square" />
//                       <span className="nav-link-inner--text d-lg-none ml-2">
//                         Twitter
//                       </span>
//                     </NavLink>
//                     <UncontrolledTooltip delay={0} target="tooltip184698705">
//                       Follow us on Twitter
//                     </UncontrolledTooltip>
//                   </NavItem>

//                   {/* <NavItem className="d-none d-lg-block ml-lg-4">
//                     <Button
//                       className="btn-neutral btn-icon"
//                       color="default"
//                       href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-navbar"
//                       target="_blank"
//                     >
//                       <span className="btn-inner--icon">
//                         <i className="fa fa-cloud-download mr-2" />
//                       </span>
//                       <span className="nav-link-inner--text ml-1">
//                         Download
//                       </span>
//                     </Button>
//                   </NavItem> */}
//                 </Nav>
//               </UncontrolledCollapse>
//             </Container>
//           </Navbar>
//         </header>
//       </>
//     );
//   }
// }

// export default DemoNavbar;

import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Image,
} from "react-bootstrap";
import facebook from "../../images/facebook.svg";
import twitter from "../../images/twitter.svg";

function NavbarComponent() {
  return (
    <Navbar className="fixed-top " expand="lg">
      {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto  ">
          <Nav.Link style={{ color: "#ffff" }} href="#home">
            <button className="btn btn-dark">Home</button>
          </Nav.Link>
          <Nav.Link style={{ color: "#ffff" }} href="#gallery">
            <button className="btn btn-dark">Gallery</button>
          </Nav.Link>
          <Nav.Link style={{ color: "#ffff" }} href="#book">
            <button className="btn btn-dark">Book Now</button>
          </Nav.Link>
        </Nav>

        <Nav className="ml-auto">
          <Nav.Link href="#facebook">
            <Image src={facebook} alt="Facebook" width="15" height="15" />
          </Nav.Link>
          <Nav.Link href="#twitter">
            <Image src={twitter} alt="Twitter" width="15" height="15" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
