import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const PremiumData = ({ course }) => {
    const { title, imageURl, titleCategory, details
        , name } = course
    return (
        <div>
            <Row xs={1} md={2} className="g-4">
                (
                <Col>
                    <Card>
                        <Card.Img variant="top" src={imageURl} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                {details}
                            </Card.Text>
                            <p>{titleCategory}</p>
                        </Card.Body>
                    </Card>
                </Col>
                )
            </Row>
        </div>
    );
};

export default PremiumData;