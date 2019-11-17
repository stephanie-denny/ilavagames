import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Follow us{' '}
      <a href="#">@iLavaGames</a>
    </h2>
    <br />
    <InstagramFeed count="8" />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Made with &hearts; by{' '}
          <a href="https://hirestephanie.today">Stephanie Denny</a>.
        </span>
      </div>
    </footer>
  </div>
)
