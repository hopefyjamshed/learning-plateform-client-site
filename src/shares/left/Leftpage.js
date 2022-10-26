import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Leftpage = () => {
    const [course, setCourse] = useState([])
    useEffect(() => {
        fetch('https://learning-platform-server-xi.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])
    const courses = useLoaderData()
    console.log(courses)
    return (
        <div>
            {
                course.map(c => <Link
                    className='text-decoration-none text-secondary text-xl'
                    to={`/single/${c.id}`}>
                    {c.name}<br></br>
                </Link>)
            }
        </div>
    );
};

export default Leftpage;