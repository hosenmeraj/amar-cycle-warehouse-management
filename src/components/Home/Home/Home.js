import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner from "../../../images/banner.jpg"
import banner2 from "../../../images/banner-2.jpg"
import banner3 from "../../../images/banner-3.jpg"
import Inventory from '../../Pages/Inventory/Inventory';
import "./Home.css"
import Sponser from '../../Pages/Sponser/Sponser';
import ChoseUs from '../../Pages/ChoseUs/ChoseUs';

const Home = () => {

    return (
        <>

            <Carousel className='container'>
                <Carousel.Item >
                    <img
                        className="d-block w-100 h-50"
                        src={banner}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-danger'>SUSPENSION BIKES</h3>
                        <p>Remember the freedom, fun, and sense of accomplishment that your first bike gave you? Well, these days, kids can get rolling at an even earlier age with toddler-friendly walk bikes and coaster-brake-equipped 20-inch models that are ideal for neighborhood adventures. Even better, the fun of our kids bikes is equally matched with the quality and value that parents appreciate
                            .</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-danger'>MTB BIKES</h3>
                        <p>Remember the freedom, fun, and sense of accomplishment that your first bike gave you? Well, these days, kids can get rolling at an even earlier age with toddler-friendly walk bikes and coaster-brake-equipped 20-inch models that are ideal for neighborhood adventures. Even better, the fun of our kids bikes is equally matched with the quality and value that parents appreciate

                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-danger'>FAT BIKES</h3>
                        <p>Remember the freedom, fun, and sense of accomplishment that your first bike gave you? Well, these days, kids can get rolling at an even earlier age with toddler-friendly walk bikes and coaster-brake-equipped 20-inch models that are ideal for neighborhood adventures. Even better, the fun of our kids bikes is equally matched with the quality and value that parents appreciate</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Inventory></Inventory>
            <ChoseUs></ChoseUs>
            <Sponser></Sponser>
        </>
    );
};

export default Home;