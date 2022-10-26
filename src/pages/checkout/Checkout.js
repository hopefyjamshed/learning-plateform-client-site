import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PremiumData from '../../shares/premium/PremiumData';

const Checkout = () => {
    const courses = useLoaderData()

    return (
        <div>
            {
                courses.map(course => <PremiumData
                    key={course.id}
                    course={course}
                ></PremiumData>)
            }
        </div>
    );
};

export default Checkout;