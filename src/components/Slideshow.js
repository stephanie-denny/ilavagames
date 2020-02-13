import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './Slideshow.css'

export default class Slideshow extends React.Component {
  static defaultProps = {
    fadeImages: []
  }

  render() {
    const { fadeImages, main } = this.props
    return (
      <Carousel
        className={main}
        fade={true}
        controls={false}
        pauseOnHover={false}
        interval={4000}
      >
        {!!fadeImages &&
          fadeImages.map((slide, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={slide.image}
                alt={slide.title}
              />
              <Carousel.Caption>
                <h1>{slide.title}</h1>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
    )
  }
}
