import React from 'react'
import { graphql } from 'gatsby'
import { Location } from '@reach/router'
import qs from 'qs'
import { BrowserView, MobileView } from 'react-device-detect'
import PageHeader from '../components/PageHeader'
import BackgroundVideo from '../components/BackgroundVideo'
import Slideshow from '../components/Slideshow'
import AboutSection from '../components/AboutSection'
import PostSection from '../components/PostSection'
import Content from '../components/Content'
import Layout from '../components/Layout'


/**
 * Filter posts by date. Feature dates will be fitered
 * When used, make sure you run a cronejob each day to show schaduled content. See docs
 *
 * @param {posts} object
 */
export const byDate = posts => {
  const now = Date.now()
  return posts.filter(post => Date.parse(post.date) <= now)
}

/**
 * filter posts by category.
 *
 * @param {posts} object
 * @param {title} string
 * @param {contentType} string
 */
export const byCategory = (posts, title, contentType) => {
  const isCategory = contentType === 'postCategories'
  const byCategory = post =>
    post.categories &&
    post.categories.filter(cat => cat.category === title).length
  return isCategory ? posts.filter(byCategory) : posts
}

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
         about,
         body,
         posts = [],
         postCategories = [],
         enableSearch = true,
         contentType
       }) => (
         <Location>
           {({ location }) => {
             let filteredPosts =
               posts && !!posts.length
                 ? byCategory(byDate(posts), title, contentType)
                 : []

             let queryObj = location.search.replace('?', '')
             queryObj = qs.parse(queryObj)

             if (enableSearch && queryObj.s) {
               const searchTerm = queryObj.s.toLowerCase()
               filteredPosts = filteredPosts.filter(post =>
                 post.frontmatter.title.toLowerCase().includes(searchTerm)
               )
             }

             return (
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
                     <BackgroundVideo
                       poster={videoPoster}
                       videoTitle={videoTitle}
                     >
                       {video && <source src={video} type="video/mp4" />}
                     </BackgroundVideo>
                   </section>
                 ) : showSlideShow ? (
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
                 ) : (
                   ''
                 )}
                 {about ? <AboutSection about={about} /> : ''}
                 {!!posts.length && (
                   <section className="section">
                     <div className="container">
                       <PostSection showLoadMore={false} posts={filteredPosts} />
                     </div>
                   </section>
                 )}
                 <section className="section">
                   <div className="container">
                     <Content source={body} />
                   </div>
                 </section>
               </main>
             )
           }}
         </Location>
       )

// Export Default HomePage for front-end
const HomePage = ({ data: { page, posts, postCategories } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate
      {...page}
      {...page.fields}
      {...page.frontmatter}
      posts={posts.edges.map(post => ({
        ...post.node,
        ...post.node.frontmatter,
        ...post.node.fields
      }))}
      postCategories={postCategories.edges.map(post => ({
        ...post.node,
        ...post.node.frontmatter,
        ...post.node.fields
      }))}
      body={page.html}
    />
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
               about {
                 title
                 subtitle
                 text
                 image
               }
             }
           }
           posts: allMarkdownRemark(
             filter: { fields: { contentType: { eq: "posts" } } }
             sort: { order: DESC, fields: [frontmatter___date] }
           ) {
             edges {
               node {
                 excerpt
                 fields {
                   slug
                 }
                 frontmatter {
                   title
                   date
                   categories {
                     category
                   }
                   featuredImage
                 }
               }
             }
           }
           postCategories: allMarkdownRemark(
             filter: { fields: { contentType: { eq: "postCategories" } } }
             sort: { order: ASC, fields: [frontmatter___title] }
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
       `
