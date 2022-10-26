import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CoursesCart = ({ course }) => {
    const { id, imageURl, details, titleCategory, name } = course
    return (
        <div>
            <Card className="bg-dark text-white mt-3">
                <Card.Img style={{ width: '100%', height: '400px' }} src={imageURl} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title className='text-5 text-danger'>{name}</Card.Title>
                    <Card.Text className='text-danger'>
                        {details.length > 250
                            ? <p>{details.slice(0, 250) + '...'}<Link to={`/single/${id}`}>read more</Link></p>
                            : <p>{details}</p>}
                    </Card.Text>

                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default CoursesCart;