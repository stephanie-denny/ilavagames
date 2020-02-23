import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import BackgroundVideo from '../components/BackgroundVideo'
// import _get from 'lodash/get'
// import AlertTriangle from 'react-feather/dist/icons/alert-triangle'

import Layout from '../components/Layout'

export default ({ children }) => {
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
        const { siteTitle, errorVideo, errorVideoPoster } =
          data.settingsYaml || {}

        return (
          <Layout>
            <Helmet>
              <title>{siteTitle} 404 – Page Not Found</title>
            </Helmet>
            <section className="BackgroundVideo-section section error">
              <BackgroundVideo poster={errorVideoPoster}>
                {errorVideo && (
                  <source src={errorVideo} type="video/mp4" />
                )}
              </BackgroundVideo>
            </section>
          </Layout>
        )
      }}
    />
  )
}
