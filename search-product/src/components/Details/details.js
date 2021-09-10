import React from 'react';
import Navbar from '../Navbar';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    return (
        <div>
            <Navbar />
            <div>
                ID: {id}
            </div>
        </div>
    );
}

export default Details;