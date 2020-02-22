import React from 'react'
import queryString from 'query-string'
import { Smartphone, Mail } from 'react-feather'
import { graphql } from 'gatsby'
import { BrowserView, MobileView } from 'react-device-detect'

import PageHeader from '../components/PageHeader'
import BackgroundVideo from '../components/BackgroundVideo'
import Slideshow from '../components/Slideshow'
import Contact from '../components/Contact'
import Contribute from '../components/Contribute'
import Support from '../components/Support'
import Layout from '../components/Layout'
import { Accordion, Card, Button, Row, Col } from 'react-bootstrap'
import './ContactPage.css'

function CustomToggle({ children, eventKey }) {
  return (
    <Accordion.Toggle
      as={Card.Header}
      eventKey={eventKey}
      className="p-3 pl-5"
    >
     {children}
    </Accordion.Toggle>
  )
}

function CustomAccordion({children}){
  const url = typeof window !== 'undefined' ? window.location.search : ''
  const value = queryString.parse(url)
  let activeKey = (
    value.tab === 'contact' ? "1" : value.tab === 'support' ?  "2" : "0"
  )
   return <Accordion defaultActiveKey={activeKey}>{children}</Accordion>
}


// Export Template for use in CMS preview
export const ContactPageTemplate = ({
         body,
         title,
         subtitle,
         featuredImage,
         phone,
         email,
         video,
         videoPoster,
         videoTitle,
         showVideoBanner,
         slides,
         showFeaturedImage,
         showSlideShow,
         contributeTitle,
         contributeText,
         contactTitle,
         contactText,
         supportTitle,
         supportText
       }) => (
         <main className="Contact">
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
           <CustomAccordion>
             <Card>
               <CustomToggle variant="link" eventKey="0" activeKey="0">
                 Contribute to LavaGames
               </CustomToggle>
               <Accordion.Collapse eventKey="0">
                 <Card.Body>
                   <section className="section container">
                     <Row>
                       <Col>
                         <Contribute />
                       </Col>
                       <Col>
                         <h2>{contributeTitle}</h2>
                         <p>{contributeText}</p>
                       </Col>
                     </Row>
                   </section>
                 </Card.Body>
               </Accordion.Collapse>
             </Card>
             <Card>
               <CustomToggle
                 as={Button}
                 variant="link"
                 eventKey="1"
                 activeKey="1"
               >
                 Contact LavaGames
               </CustomToggle>
               <Accordion.Collapse eventKey="1">
                 <Card.Body>
                   <section className="section container">
                     <Row>
                       <Col>
                         <h2>{contactTitle}</h2>
                         <p>{contactText}</p>
                         <div className="Contact--Details">
                           {phone && (
                             <a
                               className="Contact--Details--Item"
                               href={`tel:${phone}`}
                             >
                               <Smartphone /> {phone}
                             </a>
                           )}
                           {email && (
                             <a
                               className="Contact--Details--Item"
                               href={`mailto:${email}`}
                             >
                               <Mail /> {email}
                             </a>
                           )}
                         </div>
                       </Col>
                       <Col>
                         <Contact />
                       </Col>
                     </Row>
                   </section>
                 </Card.Body>
               </Accordion.Collapse>
             </Card>
             <Card>
               <CustomToggle as={Button} variant="link" eventKey="2">
                 LavaGames Support
               </CustomToggle>
               <Accordion.Collapse eventKey="2">
                 <Card.Body>
                   <section className="section container">
                     <Row>
                       <Col>
                         <Support />
                       </Col>
                       <Col>
                         <h2>{supportTitle}</h2>
                         <p>{supportText}</p>
                         <div className="Contact--Details">
                           {phone && (
                             <a
                               className="Contact--Details--Item"
                               href={`tel:${phone}`}
                             >
                               <Smartphone /> {phone}
                             </a>
                           )}
                           {email && (
                             <a
                               className="Contact--Details--Item"
                               href={`mailto:${email}`}
                             >
                               <Mail /> {email}
                             </a>
                           )}
                         </div>
                       </Col>
                     </Row>
                   </section>
                 </Card.Body>
               </Accordion.Collapse>
             </Card>
           </CustomAccordion>
         </main>
       )

const ContactPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ContactPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ContactPage

export const pageQuery = graphql`
         query ContactPage($id: String!) {
           page: markdownRemark(id: { eq: $id }) {
             ...Meta
             html
             frontmatter {
               title
               template
               subtitle
               featuredImage
               showFeaturedImage
               showVideoBanner
               video
               videoPoster
               videoTitle
               showSlideShow
               slides {
                 image
                 title
               }
               contributeTitle
               contributeText
               contactTitle
               contactText
               supportTitle
               supportText
               phone
               email
             }
           }
         }
       `
