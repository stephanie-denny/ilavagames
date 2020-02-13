import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import FA from 'react-fontawesome'
import { Link } from 'gatsby'

import './MarketingSection.css'

const url =
  'https://gmail.us4.list-manage.com/subscribe/post?u=6e30f8fef91662af3be090ae2&amp;id=a1eb38b110'

const SimpleForm = () => <MailchimpSubscribe url={url} />

const MarketingSection = ({ marketing }) => {
  return (
    <section className="section marketing">
      <div className="container p-5">
        <Row>
          <Col className="col-12 col-md-6 text-center text-md-left">
            <h2>{marketing.contributorTitle}</h2>
            <p>{marketing.contributorText}</p>
            <Link to="/contact" className="Button secondary">
              Learn More
            </Link>
          </Col>
          <Col className="col-12 col-md-6 text-center text-md-left mt-5 mt-md-0 newsletter">
            <h2>
              {marketing.newsletterTitle}
              <FA
                name="envelope"
                style={{ color: 'var(--secondary)' }}
                className="ml-4"
              />
            </h2>
            <p>{marketing.newsletterText}</p>
            <SimpleForm />
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default MarketingSection
