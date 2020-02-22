import React from 'react'
import queryString from 'query-string'
import { MapPin, Smartphone, Mail } from 'react-feather'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Contact from '../components/Contact'
import Content from '../components/Content'
import Layout from '../components/Layout'
import { Accordion, Card, Button } from 'react-bootstrap'
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
         address,
         phone,
         email
       }) => (
           <main className="Contact">
             <PageHeader
               title={title}
               subtitle={subtitle}
               backgroundImage={featuredImage}
             />
             <CustomAccordion>
               <Card>
                 <CustomToggle
                   variant="link"
                   eventKey="0"
                   activeKey="0"
                 >
                   Contribute to LavaGames
                 </CustomToggle>
                 <Accordion.Collapse eventKey="0">
                   <Card.Body>
                     <section className="section Contact--Section1">
                       <div className="container Contact--Section1--Container">
                         <div>
                           <Content source={body} />
                           <div className="Contact--Details">
                             {address && (
                               <a
                                 className="Contact--Details--Item"
                                 href={`https://www.google.com.au/maps/search/${encodeURI(
                                   address
                                 )}`}
                                 target="_blank"
                                 rel="noopener noreferrer"
                               >
                                 <MapPin /> {address}
                               </a>
                             )}
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
                         </div>

                         <div>
                           <Contact />
                         </div>
                       </div>
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
                     <section className="section Contact--Section1">
                       <div className="container Contact--Section1--Container">
                         <div>
                           <Content source={body} />
                           <div className="Contact--Details">
                             {address && (
                               <a
                                 className="Contact--Details--Item"
                                 href={`https://www.google.com.au/maps/search/${encodeURI(
                                   address
                                 )}`}
                                 target="_blank"
                                 rel="noopener noreferrer"
                               >
                                 <MapPin /> {address}
                               </a>
                             )}
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
                         </div>

                         <div>
                           <Contact />
                         </div>
                       </div>
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
                     <section className="section Contact--Section1">
                       <div className="container Contact--Section1--Container">
                         <div>
                           <Content source={body} />
                           <div className="Contact--Details">
                             {address && (
                               <a
                                 className="Contact--Details--Item"
                                 href={`https://www.google.com.au/maps/search/${encodeURI(
                                   address
                                 )}`}
                                 target="_blank"
                                 rel="noopener noreferrer"
                               >
                                 <MapPin /> {address}
                               </a>
                             )}
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
                         </div>

                         <div>
                           <Contact />
                         </div>
                       </div>
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
        address
        phone
        email
      }
    }
  }
`
