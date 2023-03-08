import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../../components/seo'
import Experience from '../experience/experience.mdx'

const ExperiencePage = ( {data} ) => {
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
          <Experience/>
          <StaticImage
              alt="A Husky from the University of Washington, just like me!"
              src="../../images/collincodes-logo/png/logo-no-background.png"
          />
        </Layout>
    )
}

export const query = graphql`
  query MyQuery {
    mdx(frontmatter: {slug: {eq: "experience"}}) {
      frontmatter {
        title
      }
      body
    }
  }
`

export const Head = () => <Seo title="Experience"/>

export default ExperiencePage