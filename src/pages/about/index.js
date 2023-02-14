import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../../components/seo'
import About from '../about/about.mdx'

const AboutPage = ( {data} ) => {
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
          <About/>
          <StaticImage
              alt="A Husky from the University of Washington, just like me!"
              src="../../images/dubs.jpg"
          />
        </Layout>
    )
}

export const query = graphql`
  query MyQuery {
    mdx(frontmatter: {slug: {eq: "about"}}) {
      frontmatter {
        title
      }
      body
    }
  }
`

export const Head = () => <Seo title="About"/>

export default AboutPage