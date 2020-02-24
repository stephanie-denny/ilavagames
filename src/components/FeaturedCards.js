import React from 'react'
import { Card, CardDeck } from 'react-bootstrap'
import { Link } from 'gatsby'

import './FeaturedCards.css'

const FeaturedCards = ({ cards }) => {
  return (
    <section className="section">
      <div className="container">
        {cards.length && cards.length > 0 && (
          <CardDeck>
            {cards.map((card, index) => (
                <Link key={index} className="card" to={card.link}>
                  <Card.Img variant="top" src={card.image} />
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                  </Card.Body>
                </Link>
            ))}
          </CardDeck>
        )}
      </div>
    </section>
  )
}

export default FeaturedCards
