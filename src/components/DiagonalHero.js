import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './DiagonalHero.scss'

export default class DiagonalHero extends Component {
         componentDidMount = () =>
           document.documentElement.style.setProperty(
             '--diagonalBgImg',
             `url('${this.props.backgroundImage}')`
           )
         render() {
           const { title, subtitle, textColor, heroLabel } = this.props

           return (
             <div className={`hero hero--diagonal padding-y-xxl ${textColor}`}>
               <div className="container max-width-adaptive-sm">
                 <div className="hero__content text-center">
                   <div className="hero__label margin-bottom-xxs">
                     {heroLabel}
                   </div>

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
             </div>
           )
         }
       }

DiagonalHero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

