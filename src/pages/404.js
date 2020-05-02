import React from 'react'
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout'

import './fourohfour.css'

export default () => {
  return (
    <StaticQuery
      query={graphql`
        {
          settingsYaml {
            siteTitle
            errorVideoPoster
            errorVideo
          }
        }
      `}
      render={data => {
        const { siteTitle } =
          data.settingsYaml || {}

        return (
          <Layout>
            <Helmet>
              <title>{siteTitle} 404 – Page Not Found</title>
            </Helmet>
            <section className="section page-not-found">
              <div className="container skinny taCenter">
                <h1>&lt;404/&gt;</h1>
                <p>
                  We can't find the page you are looking for!
                  <br />
                  Head back to <Link to="/">{siteTitle}</Link>
                </p>
              </div>
            </section>
          </Layout>
        )
      }}
    />
  )
}
