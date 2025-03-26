import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import LasVegas from './assets/LasVegas.webp'
import Jaban from './assets/Japan.webp'
import Macao from './assets/Macao.webp'
import HongKong from './assets/HongKong.jpg'

const DemoCarousel = () => {
    const onChange = () => {
        console.log('Slide changed');
    };

    const onClickItem = () => {
        console.log('Item clicked');
    };

    const onClickThumb = () => {
        console.log('Thumbnail clicked');
    };

    return (
        <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
            <div>
                <img src={LasVegas} alt="Las Vegas" />
                <p className="legend">Las Vegas</p>
            </div>
            <div>
                <img src={Jaban} alt="Japan" />
                <p className="legend">Japan</p>
            </div>
            <div>
                <img src={Macao} alt="Macao" />
                <p className="legend">Macao</p>
            </div>
            <div>
                <img src={HongKong} alt="Hong Kong" />
                <p className="legend">Hong Kong</p>
            </div>
        </Carousel>
    );
}

export default DemoCarousel;