import React from 'react'
import { MapPin, Smartphone, Mail } from 'react-feather'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Contact from '../components/Contact'
import Content from '../components/Content'
import Layout from '../components/Layout'
import { Accordion, Card, Button } from 'react-bootstrap'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle'
import './ContactPage.css'

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log('totally custom!')
  )

  return (
    <button
      type="button"
      style={{ backgroundColor: 'pink' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  )
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
           <Accordion defaultActiveKey="0">
             <Card>
               <Card.Header>
                 <CustomToggle as={Button} variant="link" eventKey="0">
                   Contribute to LavaGames
                 </CustomToggle>
               </Card.Header>
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
               <Card.Header>
                 <Accordion.Toggle as={Button} variant="link" eventKey="1">
                   Contact LavaGames
                 </Accordion.Toggle>
               </Card.Header>
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
               <Card.Header>
                 <Accordion.Toggle as={Button} variant="link" eventKey="2">
                   LavaGames Support
                 </Accordion.Toggle>
               </Card.Header>
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
           </Accordion>
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
