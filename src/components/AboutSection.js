import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'gatsby'

import './AboutSection.css'

const AboutSection = ({ about }) => {
  return (
    <section className="section about">
      <div className="container">
        <Row>
          <Col className="col-12 mb-5 col-md-6 text-center text-lg-left">
            <h2>{about.title}</h2>
            <p>{about.subtitle}</p>
            <p>{about.text}</p>
            <Link to="/about" className="Button secondary">
              More About Lava Games
            </Link>
          </Col>
          <Col className="col-12 col-md-6">
            <img src={about.image} alt="" className="img-fluid" />
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default AboutSection
