import React from 'react'
import { Carousel } from 'react-bootstrap'
import ExampleCarouselImage from '../components/ExampleCarouselImage';

const Carosel = () => {
  return (
    <Carousel>
        
      <Carousel.Item interval={1000}>
        <div className="mycarousel-item">
            <ExampleCarouselImage text="First slide" url="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/hero-iPhoneLOB-iPhoneXS-lv-42221.jpg"/>
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </div>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <div className="mycarousel-item">
            <ExampleCarouselImage text="Second slide" url="https://i.pinimg.com/originals/83/81/01/838101a3055a4e8a800bb8b560587131.jpg" />
            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className='mycarousel-item'>
            <ExampleCarouselImage text="Third slide" url="https://th.bing.com/th/id/OIP.z88CBCIjjZNd2-J6k3HGAgHaDF?w=1085&h=452&rs=1&pid=ImgDetMain"/>
            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  )
}

export default Carosel