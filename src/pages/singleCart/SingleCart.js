import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link, useLoaderData } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


const SingleCart = () => {
    const category = useLoaderData()
    console.log(category)


    const handleDownPdf = () => {
        html2canvas(document.querySelector("#pdfDownload")).then(canvas => {
            document.body.appendChild(canvas);  // if you want see your screenshot in body.
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'PNG', 0, 0);
            pdf.save("download.pdf");
        });
    }

    return (
        <div className='mt-5'>


            <Card className='' id="pdfDownload">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <h3>
                        {category.name}
                    </h3>
                    <FaDownload onClick={handleDownPdf} icons={FaDownload}></FaDownload>

                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {category.details}
                    </Card.Text>

                </Card.Body>
                <Card.Img style={{ widht: '100%', height: '300px' }} className='img img-fluid' variant="bottom" src={category.imageURl} />

                <div className='mt-3 mb-2'>
                    <Link to='/'><Button variant="outline-dark">Go to courses</Button></Link>

                    <Link to={`/checkout`}><Button className='ms-2' variant="outline-dark">Premium Access</Button></Link>
                </div>

            </Card>

        </div>
    );
};

export default SingleCart;