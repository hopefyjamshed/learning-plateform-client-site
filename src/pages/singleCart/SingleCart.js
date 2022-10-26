import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link, useLoaderData } from 'react-router-dom';

const SingleCart = () => {
    const category = useLoaderData()
    console.log(category)
    return (
        <div className='mt-5'>
            <Link to={`/checkout`}><Button className='mb-3' variant="outline-dark">Premium Access</Button></Link>

            <Card className=''>
                <Card.Body>
                    <Card.Text>
                        {category.details}
                    </Card.Text>
                    <Link to='/'><Button variant="outline-dark">Go to courses</Button></Link>
                </Card.Body>
                <Card.Img style={{ widht: '100%', height: '300px' }} className='img img-fluid' variant="bottom" src={category.imageURl} />
            </Card>
        </div>
    );
};

export default SingleCart;