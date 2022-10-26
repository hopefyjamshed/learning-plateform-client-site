import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesCart from '../../shares/courseCart/CoursesCart';

const Courses = () => {
    const courses = useLoaderData()
    console.log(courses)
    return (
        <div>
            {
                courses.map(course => <CoursesCart
                    key={course.id}
                    course={course}
                ></CoursesCart>)
            }
        </div>
    );
};

export default Courses;