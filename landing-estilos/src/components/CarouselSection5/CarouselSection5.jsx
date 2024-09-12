import { Carousel } from 'react-bootstrap';
import './CarouselSection5.css';

export default function CarouselSection5() {
    return (
        <Carousel interval={6000} controls={false} className='containerCarousel'>
            <Carousel.Item >
                <div className='item'>
                    <p className='item-paragraph'>“Vivamus sagittis lacus vel augue laoreet rutrum
                        faucibus dolor auctor. Vestibulum ligula porta felis
                        euismod semper. Cras justo odio.”</p>
                    <p className='item-author'>Coriss Ambady</p>
                    <p className='item-job'>Financial Analyst</p>
                </div>
            </Carousel.Item>
            <Carousel.Item >
                <div className='item'>
                    <p className='item-paragraph'>“Vivamus sagittis lacus vel augue laoreet rutrum
                        faucibus dolor auctor. Vestibulum ligula porta felis
                        euismod semper. Cras justo odio.”</p>
                    <p className='item-author'>Coriss Ambady</p>
                    <p className='item-job'>Financial Analyst</p>
                </div>
            </Carousel.Item>
            <Carousel.Item >
                <div className='item'>
                    <p className='item-paragraph'>“Vivamus sagittis lacus vel augue laoreet rutrum
                        faucibus dolor auctor. Vestibulum ligula porta felis
                        euismod semper. Cras justo odio.”</p>
                    <p className='item-author'>Coriss Ambady</p>
                    <p className='item-job'>Financial Analyst</p>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}
