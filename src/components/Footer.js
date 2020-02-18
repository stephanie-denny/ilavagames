import React from 'react'
import Logo from './Logo'
import InstagramFeed from './InstagramFeed'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'gatsby'
import FA from 'react-fontawesome'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Follow us{' '}
      <a href="https://twitter.com/LavaGamesStudio">@LavaGamesStudio</a>
    </h2>
    <br />
    <InstagramFeed count="8" />
    <footer className="footer">
      <div className="container p-5">
        <Row>
          <Col className="col-2">
            <Link to="/">
              <Logo />
            </Link>
          </Col>
          <Col className="col-10">
            <div className="d-flex justify-content-center mb-5">
              <Link className="pl-3 pr-3 ml-3 mr-3 links" to="/games">Games</Link>
              <Link className="pl-3 pr-3 ml-3 mr-3 links" to="/about">About</Link>
              <Link className="pl-3 pr-3 ml-3 mr-3 links" to="/contact">Support</Link>
              <Link className="pl-3 pr-3 ml-3 mr-3 links" to="/contact">Contribute</Link>
              <Link className="pl-3 pr-3 ml-3 mr-3 links" to="/contact">Contact</Link>
              <Link className="pl-3 pr-3 ml-3 mr-3 links" to="#">Discord</Link>
            </div>
            <div className="d-flex justify-content-center mb-5">
              <Link className="pl-3 pr-3 ml-3 mr-3 links" to="#">Terms</Link>
              <Link className="pl-3 pr-3 ml-3 mr-3 links" to="#">Privacy Policy</Link>
            </div>
            <div className="d-flex justify-content-center mb-5 social">
              <Link className="pl-3 pr-3 ml-3 mr-3" to="#">
                <FA
                  name="facebook"
                  style={{ color: 'var(--secondary)' }}
                  size="2x"
                />
              </Link>
              <Link className="pl-3 pr-3 ml-3 mr-3" to="#">
                <FA
                  name="twitter"
                  style={{ color: 'var(--secondary)' }}
                  size="2x"
                />
              </Link>
              <Link className="pl-3 pr-3 ml-3 mr-3" to="#">
                <FA
                  name="instagram"
                  style={{ color: 'var(--secondary)' }}
                  size="2x"
                />
              </Link>
              <Link className="pl-3 pr-3 ml-3 mr-3" to="#">
                <FA
                  name="youtube"
                  style={{ color: 'var(--secondary)' }}
                  size="2x"
                />
              </Link>
            </div>
          </Col>
        </Row>
      </div>
      <div className="container taCenter copyright">
        <span>
          © Copyright {new Date().getFullYear()} LavaGames. All rights reserved.
          Made with &hearts; by{' '}
          <a href="https://hirestephanie.today">Stephanie Denny</a>.
        </span>
      </div>
    </footer>
  </div>
)
