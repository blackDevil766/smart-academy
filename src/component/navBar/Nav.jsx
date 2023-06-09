import React, { useState } from "react";
import Item from "./Item";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// var lastScrollY = window.scrollY;

// window.addEventListener("scroll", () => {

//     var nav = document.querySelector("#nav");

//     if (lastScrollY < window.scrollY ) {
//         nav.classList.remove("native2");
//         nav.classList.add("native");

//     } else {
//         nav.classList.remove("native2");
//         nav.classList.add("native2");
//     }

//     lastScrollY = window.scrollY;
// })

function NavBar(props) {
  const [onscrolls, setOnScroll] = useState();

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 150) {
      setOnScroll("nav");
    } else {
      setOnScroll("nav2");
    }
  });

  return (
    <>
      <Navbar id={onscrolls} bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <a
              className="navbar-brand navLogo"
              style={{ fontSize: "26px", color: "rgb(7, 30, 85)" }}
              href="#"
            >
              <img className="LogoIcon" src="imgs\logoIcon.svg" alt="" /> Smart
            </a>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />

          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">
                <li className="nav-item">
                  <a
                    id="homeItem"
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
              </Nav.Link>

              <Nav.Link href="/about">
                <Item linkIt="#about" text="About" />
              </Nav.Link>

              <Nav.Link href="/our-team">
                <Item linkIt="#ourTeam" text="Our Team" />
              </Nav.Link>

              <Nav.Link href="/how-it-work">
                <Item linkIt="#howItWork" text="How It Work" />
              </Nav.Link>

              <Nav.Link href="/pricing">
                <Item linkIt="#pricing" text="Pricing" />
              </Nav.Link>

              <Nav.Link href="/blog">
                <Item linkIt="#blog" text="Blog" />
              </Nav.Link>

              <Nav.Link href="/contact">
                <Item linkIt="#contact" text="Contact" />
              </Nav.Link>
            </Nav>

            <div className="loginPart">
              <a className="login">
                <img src="imgs\person.svg" alt="" /> Login
              </a>
              <button id="signUpBtn" className="btn btn-primary" type="submit">
                Sign-up
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );

  // return (
  //         <nav  id="nav" className ="navbar navbar-expand-lg navbar-light ">
  //             <div className ="container-fluid ">

  // <a className ="navbar-brand navLogo" style={{ fontSize: "26px", color: "rgb(7, 30, 85)" }} href="#"><img className="LogoIcon" src="imgs\logoIcon.svg" alt="" /> Smart</a>

  //                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  //                     <span className="navbar-toggler-icon"></span>
  //                 </button>
  //                 <div className ="collapse navbar-collapse" id="navbarSupportedContent">
  //                     <ul className ="navbar-nav me-auto mb-2 mb-lg-0">

  // <li className="nav-item">
  //     <a id="homeItem" className="nav-link active" aria-current="page" href="#">Home</a>
  // </li>

  //                         <Item linkIt = "#about" text="About" />
  // <Item linkIt = "#ourTeam" text="Our Team" />
  // <Item linkIt = "#howItWork" text="How It Work" />
  //                         <Item linkIt = "#pricing" text="Pricing" />
  // <Item linkIt = "#blog" text="Blog" />
  //                         <Item linkIt = "#contact" text="Contact" />

  //                     </ul>
  //                     <div className="loginPart">
  //                         <a className="login"> <img src="imgs\person.svg" alt="" /> Login</a>
  //                         <button id="signUpBtn" className="btn btn-primary" type="submit">Sign-up</button>
  //                     </div>

  //                 </div>
  //             </div>

  //         </nav>

  // )
}

export default NavBar;

// var lastScrollY = window.scrollY;

// window.addEventListener("scroll", () => {

//     var nav = document.querySelector("#nav");

//     if (lastScrollY < window.scrollY ) {
//         nav.classList.remove("native2");
//         nav.classList.add("native");

//         if (window.scrollY == 777.7777709960938) {
//             // console.log(its);
//         }

//     } else {
//         nav.classList.remove("native2");
//         nav.classList.add("native2");
//     }

//     lastScrollY = window.scrollY;
// })

// scond try //

// if (lastScroll < window.scrollY) {

//     var nav = document.querySelector("#nav");

//     nav.classList.add("native");

//     if (window.scrollY == 700 && 701 && 702 && 703 && 704 && 705 && 706) {
//         nav.classList.remove("native");
//         nav.classList.add("native2");
//     }

// }

//     lastScrollY = window.scrollY;
