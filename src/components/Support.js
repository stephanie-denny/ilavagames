import React, { Fragment } from 'react'
import { navigateTo } from 'gatsby-link'
import FA from 'react-fontawesome'

import './Form.css'

export default class Support extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      subject: 'Contact Submission From Website',
      email: '',
      message: ''
    }
  }

  handleChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value })
  }

  handleSubmit = async e => {
    e.preventDefault()
    const form = e.target

    try {
      const response = await fetch('/.netlify/functions/sendemail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: JSON.stringify(this.state)
      })

      if (!response.ok) {
        return
      }

      navigateTo(form.getAttribute('action'))
    } catch (e) {
      alert(e)
    }
  }

  render() {
    return (
      <Fragment>
        <form
          className="Form"
          name="contact"
          method="post"
          action="/thank-you/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{' '}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <div className="Form--Group">
            <label className="Form--Label">
              <input
                className="Form--Input Form--InputText"
                type="text"
                placeholder="Your Name"
                name="name"
                onChange={this.handleChange}
                required
              />
              <span>Your name:</span>
            </label>
            <label className="Form--Label">
              <input
                className="Form--Input Form--InputText"
                type="email"
                name="email"
                placeholder="Your Email"
                onChange={this.handleChange}
                required
              />
              <span>Your email:</span>
            </label>
          </div>
          <label className="Form--Label">
            <select
              className="Form--Select"
              name="email"
              required
            >
              <option selected disabled>
                First Choice
              </option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </label>
          <label className="Form--Label">
            <select
              className="Form--Select"
              name="email"
              required
            >
              <option selected disabled>
                Second Choice
              </option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </label>
          <input
            className="Form--Upload"
            type="file"
            name="upload"
            placeholder="Upload File"
            onChange={this.handleChange}
            id="upload"
          />
          <label className="Form--Label" for="upload">
            <span>
              <FA
                name="upload"
                style={{ color: 'var(--secondary)' }}
              />
              {' '} Upload File
            </span>
          </label>
          <label className="Form--Label">
            <textarea
              className="Form--Input Form--Textarea Form--InputText"
              name="message"
              placeholder="Message"
              rows="10"
              required
              onChange={this.handleChange}
            />
            <span>Message:</span>
          </label>
          <div data-netlify-recaptcha="true"></div>
          <input
            className="Button Form--SubmitButton"
            type="submit"
            value="Send"
          />
        </form>
      </Fragment>
    )
  }
}
