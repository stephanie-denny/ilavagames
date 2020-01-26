import React from 'react'
import { graphql } from 'gatsby'
import { BrowserView, MobileView } from 'react-device-detect'
import PageHeader from '../components/PageHeader'
import BackgroundVideo from '../components/BackgroundVideo'
import Slideshow from '../components/Slideshow'
import Content from '../components/Content'
import Layout from '../components/Layout'

// Export Template for use in CMS preview
export const HomePageTemplate = ({
         title,
         subtitle,
         video,
         videoPoster,
         videoTitle,
         showVideoBanner,
         slides,
         featuredImage,
         showFeaturedImage,
         showSlideShow,
         body
       }) => (
         <main className="Home">
           {showFeaturedImage ? (
             <PageHeader
               large
               title={title}
               subtitle={subtitle}
               backgroundImage={featuredImage}
             />
           ) : showVideoBanner ? (
             <section className="BackgroundVideo-section section">
               <BackgroundVideo poster={videoPoster} videoTitle={videoTitle}>
                 {video && <source src={video} type="video/mp4" />}
               </BackgroundVideo>
             </section>
           ) :
             showSlideShow ? (
               <section className="section">
                 <MobileView>
                   <PageHeader
                     large
                     title={title}
                     subtitle={subtitle}
                     backgroundImage={featuredImage}
                   />
                 </MobileView>
                 <BrowserView>
                   <Slideshow main="main" fadeImages={slides} />
                 </BrowserView>
               </section>
           ) : ('')}
           <section className="section">
             <div className="container">
               <Content source={body} />
             </div>
           </section>
         </main>
       )

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
         ## Query for HomePage data
         ## Use GraphiQL interface (http://localhost:8000/___graphql)
         ## $id is processed via gatsby-node.js
         ## query name must be unique to this file
         query HomePage($id: String!) {
           page: markdownRemark(id: { eq: $id }) {
             ...Meta
             html
             frontmatter {
               title
               subtitle
               featuredImage
               showSlideShow
               slides {
                 image
                 title
               }
               showFeaturedImage
               showVideoBanner
               video
               videoPoster
               videoTitle
             }
           }
         }
       `
