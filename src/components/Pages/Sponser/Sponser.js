import React from 'react';

import { Carousel } from 'react-bootstrap';
import sponser1 from '../../../images/sponer-1.png'
import sponser2 from '../../../images/sponer-2.png'
import sponser3 from '../../../images/sponer-3.png'
import sponser4 from '../../../images/sponer-4.png'
import sponser5 from '../../../images/sponer-5.png'
import sponser6 from '../../../images/sponer-6.png'
import sponser7 from '../../../images/sponer-7.png'
import sponser8 from '../../../images/sponer-8.png'
import sponser9 from '../../../images/sponer-9.png'
import sponser10 from '../../../images/sponer-10.png'

const Sponser = () => {
    return (
        <>
            <h1 className='text-primary'>Only the best brands</h1>
            <Carousel className='container '>
                <Carousel.Item interval={1000} className="d-flex justify-content-center align-items-center  ">
                    <img
                        className="d-block w-25"
                        src={sponser1}
                        alt="First slide"

                    />
                    <img
                        className="d-block w-25"
                        src={sponser2}
                        alt="Second slide"

                    />
                    <img
                        className="d-block w-25"
                        src={sponser3}
                        alt="Third slide"

                    />
                    <img
                        className="d-block w-25"
                        src={sponser4}
                        alt="Third slide"

                    />
                    <img
                        className="d-block w-25"
                        src={sponser5}
                        alt="Third slide"

                    />
                    <img
                        className="d-block w-25"
                        src={sponser6}
                        alt="Third slide"

                    />
                    {/* <img
                        className="d-block w-25"
                        src={sponser7}
                        alt="Third slide"
                        style={{ width: "98px" }}
                    />
                    <img
                        className="d-block w-25"
                        src={sponser8}
                        alt="Third slide"
                        style={{ width: "98px" }}
                    />
                    <img
                        className="d-block w-25"
                        src={sponser9}
                        alt="Third slide"
                        style={{ width: "98px" }}
                    />
                    <img
                        className="d-block w-25"
                        src={sponser10}
                        alt="Third slide"
                        style={{ width: "98px" }}

                    /> */}
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Sponser;