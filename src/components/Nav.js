import React, { Component } from 'react'
import { Location } from '@reach/router'
import { Link } from 'gatsby'
import { Menu, X } from 'react-feather'
import Logo from './Logo'

import './Nav.css'

export class Navigation extends Component {
         state = {
           active: false,
           activeSubNav: false,
           currentPath: false,
           isTop: true
         }

         componentDidMount() {
           this.setState({ currentPath: this.props.location.pathname })
           document.addEventListener('scroll', () => {
             const isTop = window.scrollY < 100
             if (isTop !== this.state.isTop) {
               this.setState({ isTop })
             }
           })
         }

         handleMenuToggle = () => this.setState({ active: !this.state.active })

         // Only close nav if it is open
         handleLinkClick = () => this.state.active && this.handleMenuToggle()

         toggleSubNav = subNav =>
           this.setState({
             activeSubNav: this.state.activeSubNav === subNav ? false : subNav
           })

         render() {
           const { active } = this.state,
             NavLink = ({ to, className, children, ...props }) => (
               <Link
                 to={to}
                 className={`NavLink ${
                   to === this.state.currentPath ? 'active' : ''
                 } ${className}`}
                 onClick={this.handleLinkClick}
                 {...props}
               >
                 {children}
               </Link>
             )

           return (
             <nav
               className={`Nav ${active ? 'Nav-active' : ''} ${
                 this.state.isTop ? '' : 'fixed'
               }`}
             >
               <div className="Nav--Container container">
                 <Link to="/" onClick={this.handleLinkClick}>
                   <Logo />
                 </Link>
                 <div className="Nav--Links">
                   <NavLink to="/">Home</NavLink>
                   <NavLink to="/games/">Games</NavLink>
                   <NavLink to="/about/">About</NavLink>
                   <NavLink to="/blog/">Blog</NavLink>
                   <NavLink to="/contact/">Contact</NavLink>
                 </div>
                 <button
                   className="Button-blank Nav--MenuButton"
                   onClick={this.handleMenuToggle}
                 >
                   {active ? <X /> : <Menu />}
                 </button>
               </div>
             </nav>
           )
         }
       }

export default ({ subNav }) => (
  <Location>{route => <Navigation subNav={subNav} {...route} />}</Location>
)
