import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../../components/seo'
import HeadPageTemplate from '../../components/HeadPageTemplate'

const AboutPage = ( {data} ) => {
    return (
        <Layout pageTitle="About Me">
          <HeadPageTemplate data={data} />
            <StaticImage
                alt="A Husky from the University of Washington, just like me!"
                src="../images/dubs.jpg"
            />
        </Layout>
    )
}

export const query = graphql`
  query AboutPage($id: String) {
    mdx(id: { eq: $id }) {
      body
    }
  }
`

export const Head = () => <Seo title="About"/>

export default AboutPage