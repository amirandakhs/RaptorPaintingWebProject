import React from "react";

import {
  Card,
  CardBody,
  CardTitle,
  Col
} from "reactstrap";
function TestemonyCard({Name, Review, ImageName, Rate })
{   

    return (
            <Col md="4">
                <Card className="card-profile card-plain">
                    <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                        alt="..."
                        src={require(`assets/img/faces/${ImageName}`)}
                        />
                    </a>
                    </div>
                    <CardBody>
                    <a  href="#pablo" onClick={(e) => e.preventDefault()}>
                        <div className="author">
                        <CardTitle style={{color: "#0ccf6d"}}  tag="h4">{Name}</CardTitle>
                        </div>
                    </a>
                    <p className="card-description text-center">
                        {Review }
                    </p>
                    </CardBody>                    
                </Card>
                <div>
                {
                    [ ...Array(Rate)].map(star=>(
                        <i style={{color: "#0ccf6d"}} className="fa fa-star" />
                     ))
                }
                </div>
            </Col>
    );
}

export default TestemonyCard;