import React from 'react'
import PropTypes from 'prop-types'
import './DiagonalHero.scss'


const DiagonalHero = ({
  title,
  subtitle,
  backgroundImage
}) => {
  const diagonalStyle = {
    backgroundImage: `url(${backgroundImage})`,
  }
  return (
    <div class="padding-y-xxl">
      <section
        className="hero hero--diagonal padding-y-xxl"
        style={diagonalStyle}
      >
        <div className="container max-width-adaptive-sm">
          <div className="hero__content text-center">
            <div className="hero__label margin-bottom-xxs">This is a Diagonal Hero</div>

            <div className="text-component margin-bottom-sm">
              <h1>{title}</h1>
              <p>{subtitle}</p>
            </div>

            <div className="flex flex-wrap flex-center flex-gap-sm">
              <a href="#0" className="btn btn--primary">
                Download
              </a>
              <a href="#0" className="color-inherit">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

DiagonalHero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default DiagonalHero
