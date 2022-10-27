import React from 'react';
import Card from 'react-bootstrap/Card';

const Blog = () => {
    return (
        <div>
            {/* first card  */}
            <Card className='mt-5'>
                <Card.Header className='blockquote'>What is Cors?</Card.Header>
                <Card.Body>
                    <blockquote className=" mb-0">
                        <p>
                            {' '}
                            Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.{' '}
                        </p>

                    </blockquote>
                </Card.Body>
            </Card>


            {/* second card  */}
            <Card className='mt-5'>
                <Card.Header className='blockquote'>why are you using Firebase, what other options do you have to implement Authentication?</Card.Header>
                <Card.Body>
                    <blockquote className=" mb-0">
                        <p>
                            {' '}
                            Firebase provides tools to grow your app and business, for startups & global enterprises. Get your app up and running quickly & securely with fully managed backend infrastructure. Backed by Google. 15+ Products & Solutions. Boost App Engagement.<br />
                            Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                            {' '}
                        </p>

                    </blockquote>
                </Card.Body>
            </Card>

            {/* third card  */}
            <Card className='mt-5'>
                <Card.Header className='blockquote'>How does Private route works?</Card.Header>
                <Card.Body>
                    <blockquote className=" mb-0">
                        <p>
                            {' '}
                            he private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).{' '}
                        </p>

                    </blockquote>
                </Card.Body>
            </Card>

            {/* fourth card  */}
            <Card className='mt-5'>
                <Card.Header className='blockquote'>What is node, How does node work?</Card.Header>
                <Card.Body>
                    <blockquote className=" mb-0">
                        <p>
                            {' '}
                            Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. <br />
                            It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive{' '}
                        </p>

                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Blog;