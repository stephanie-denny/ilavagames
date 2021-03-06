import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { TinyButton as ScrollUpButton } from 'react-scroll-up-button'
import Meta from './Meta'
import Nav from './Nav'
import MarketingSection from './MarketingSection'
import Footer from './Footer'

import 'modern-normalize/modern-normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './globalStyles.css'




export default ({ children, meta, title }) => {
  const url = typeof window !== 'undefined' ? window.location.pathname : '';
  return (
    <StaticQuery
      query={graphql`
        query IndexLayoutQuery {
          settingsYaml {
            siteTitle
            siteDescription
            googleTrackingId
            marketing {
              contributorTitle
              contributorText
              newsletterTitle
              newsletterText
            }
            socialMediaCard {
              image
            }
          }
          allPosts: allMarkdownRemark(
            filter: { fields: { contentType: { eq: "postCategories" } } }
            sort: { order: DESC, fields: [frontmatter___date] }
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { siteTitle, socialMediaCard, googleTrackingId, marketing } =
            data.settingsYaml || {},
          subNav = {
            posts: data.allPosts.hasOwnProperty('edges')
              ? data.allPosts.edges.map(post => {
                  return { ...post.node.fields, ...post.node.frontmatter }
                })
              : false
          }

        return (
          <Fragment>
            <Helmet
              defaultTitle={siteTitle}
              titleTemplate={`%s | ${siteTitle}`}
            >
              {title}
              <link href="https://ucarecdn.com" rel="preconnect" crossorigin />
              <link rel="dns-prefetch" href="https://ucarecdn.com" />
              <link
                href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                rel="stylesheet"
              />
              <script>UPLOADCARE_PUBLIC_KEY = '9c2cf5c03f9238a3e5ae';</script>

              <script src="https://ucarecdn.com/libs/widget/3.x/uploadcare.full.min.js"></script>
              {/* Add font link tags here */}
            </Helmet>

            <Meta
              googleTrackingId={googleTrackingId}
              absoluteImageUrl={
                socialMediaCard &&
                socialMediaCard.image &&
                socialMediaCard.image
              }
              {...meta}
              {...data.settingsYaml}
            />

            <Nav subNav={subNav} />

            <Fragment>{children}</Fragment>
            {url !== '/contact/' && (
              <MarketingSection marketing={marketing} />
            )}
            <div role="complementary">
              <ScrollUpButton />
            </div>
            <Footer />
            <script src="../node_modules/codyhouse-framework/main/assets/js/util.js"></script>
          </Fragment>
        )
      }}
    />
  )
}
