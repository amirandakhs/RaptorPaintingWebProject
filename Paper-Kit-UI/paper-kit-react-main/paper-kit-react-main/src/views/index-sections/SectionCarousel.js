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
import React from "react";

// reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

// core components

const items = [
  {
    src: require("assets/raptor-img/samples/1.jpg"),
    altText: "Somewhere",
    caption: "Explain 1"
  },
  {
    src: require("assets/raptor-img/samples/2.jpg"),
    altText: "Somewhere else",
    caption: "Explain 2"
  },
  {
    src: require("assets/raptor-img/samples/3.jpg"),
    altText: "Here it is",
    caption: "Explain 3"
  },
  {
    src: require("assets/raptor-img/samples/4.jpg"),
    altText: "Somewhere",
    caption: "Explain 4"
  },
  {
    src: require("assets/raptor-img/samples/5.jpg"),
    altText: "Somewhere",
    caption: "Explain 5"
  }
];

function SectionCarousel() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="section pt-o" id="carousel" style={{ "min-height": "100vh",
    "max-height": "999px"}}>
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <Card className="page-carousel">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items.map((item) => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                      >
                        <img src={item.src} alt={item.altText} />
                        <CarouselCaption
                          captionText=""
                          captionHeader={item.caption}
                        />
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="left carousel-control carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-left" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="right carousel-control carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-right" />
                    <span className="sr-only">Next</span>
                  </a>
                </Carousel>
              </Card>
            </Col>
            
            <Col className="mx-auto" lg="4">
            {/* <Card style={{"background": "rgba(0, 0, 0, 1)"}} className="card-register">
                    
            </Card> */}
            <div style={{"background": "rgba(0, 0, 0, 1)","padding": "70px", "height":"39em", "borderRadius": "15px", "color": "#0ccf6d" }} >
              <h5>Finishes</h5>
              <ul>
                <li>raptor</li>
              </ul>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionCarousel;
