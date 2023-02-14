import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import RepositoryList from '../../components/RepositoryList'

const ProjectPage = ( { data }) => {
    return (
        <Layout pageTitle="My Projects">
            {
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
            }
            <RepositoryList/>
        </Layout>
    )
}

export const query = graphql`
    query {
        allMdx(sort: {frontmatter: {date: DESC}}
                filter: {frontmatter: {slug: { ne: "about"}}}) {
            nodes {
                frontmatter {
                date(formatString: "MMMM D, YYYY")
                title
                slug
                }
                id
            }
        }
    }
`

export const Head = () => <Seo title="My Projects" />

export default ProjectPage