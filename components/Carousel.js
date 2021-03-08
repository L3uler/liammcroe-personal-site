
import React from "react";
import { UncontrolledCarousel, Row, Col } from "reactstrap";

import carouselPics from "../config/carouselPics";

const Carousel = () => (
    <Row>
        <Col md="8" className="mx-auto">
            <UncontrolledCarousel items={carouselPics} />
        </Col>
    </Row>
);

export default Carousel;