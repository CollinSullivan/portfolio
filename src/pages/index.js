import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <p>Home page for my awesome portfolio site (in progress)</p>
            <StaticImage
                alt="Seattle, Washington"
                src="../images/seattle.jpg"
            />
        </Layout>
    )
}

export const Head = () => <title>Home Page</title>

export default IndexPage