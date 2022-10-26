import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link, useLoaderData } from 'react-router-dom';

const SingleCart = () => {
    const category = useLoaderData()
    console.log(category)
    return (
        <div className='mt-5'>

            <Card className=''>
                <Card.Body>
                    <Card.Text>
                        {category.details}
                    </Card.Text>
                    <Link to='/'><Button variant="outline-dark">Dark</Button></Link>
                </Card.Body>
                <Card.Img className='img img-fluid' variant="bottom" src={category.imageURl} />
            </Card>
        </div>
    );
};

export default SingleCart;