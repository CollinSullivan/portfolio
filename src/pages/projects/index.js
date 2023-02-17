import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import Carousel from '../../components/Carousel'

const ProjectPage = ( { data }) => {
    return (
        <Layout pageTitle="My Projects">
            {/* {
                data.allMdx.nodes.map((node) => (
                    <article key={node.id}>
                        <h2>
                            <Link to={`/projects/${node.frontmatter.slug}`}>
                                {node.frontmatter.title}
                            </Link>
                        </h2>
                        <p>Posted: {node.frontmatter.date}</p>
                    </article>
                ))    
            } */}
            <Carousel 
                data={data}
                technology='python'/>
            <Carousel
                data={data}
                technology='java'/>
            <Carousel
                data={data}
                technology='tableau'/>
            <Carousel
                data={data}
                technology='C'/>
            
        </Layout>
    )
}

export const query = graphql`
query {
  allMdx {
    nodes {
      id
      frontmatter {
        slug
        title
        date(formatString: "MMMM D, YYYY")
        technology
      }
    }
  }
}`

export const Head = () => <Seo title="My Projects" />

export default ProjectPage