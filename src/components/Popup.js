import React, { Component, Fragment } from 'react'
import { X } from 'react-feather'

import './Popup.css'

class Popup extends Component {
  constructor(props) {
    super(props)
    this.state = { showPopup: false }
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    })
  }

  render() {
    const { children } = this.props
    return (
      <Fragment>
        <div className="taCenter">
          <h3> Simple Popup Example</h3>
          <button
            className="Button"
            onClick={this.togglePopup.bind(this)}
            onKeyDown={this.handleClick}
          >
            Click To Launch Popup
          </button>
        </div>

        {this.state.showPopup ? (
          <div className="Popup-Overlay">
            <button
              className="Popup-Background"
              onClick={this.togglePopup.bind(this)}
            ></button>
            <div className="Popup-Inner">
              <X
                className="Popup-Close"
                onClick={this.togglePopup.bind(this)}
              />
              {children}
            </div>
          </div>
        ) : null}
      </Fragment>
    )
  }
}
export default Popup
