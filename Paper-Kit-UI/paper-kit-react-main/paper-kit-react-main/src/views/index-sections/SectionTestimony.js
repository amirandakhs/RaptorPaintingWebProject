import React from "react";
import TestemonyCard from "components/Card/TestemonyCard.js";
// reactstrap components
import {
    Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  Container
} from "reactstrap";

// core components

const Review = [
  {
    image: "1.jpg",
    name: "Aimee Clark",
    review: "Dan and Hamish did an amazing job on my Suzuki Vitara, told them what I wanted and they put it together perfectly. Great communication during the process, really happy with how my car turned out. Highly recommend!!",
    rate:5
  },
  {
    image: "2.jpg",
    name: "Rese Giles",
    review: "Had my whole patrol painted through Raptor Coating Perth and all I can say is what an outstanding job they have done 👍🏼 communication was great and the work they perform is absolutely worth the money 👌🏽 cheers lads 🍻",
    rate:5
  },
  {
    image: "3.jpg",
    name: "Jordan Alington",
    review: "Absolutely stoked with my bullbar had horrible fade and paint chips from powder coaters, now it’s looking better than ever couldn’t be happier highly recommended these guys, well priced and good service 👌🏽",
    rate:5
  }

];

function SectionTestimony() {
  
  return (
    <>
      <div style={{ "min-height": "100vh","max-height": "999px"}} className="section section-dark text-center">
          <Container>
            <h2 style={{color: "#0ccf6d"}} className="title">Think about us</h2>
            <Row>
            {Review.map((item)=>(
                <TestemonyCard Name= {item.name} Review = {item.review} ImageName = {item.image} Rate = {item.rate} />
            ))}
            </Row>
          </Container>
        </div>
    </>
  );
}

export default SectionTestimony;