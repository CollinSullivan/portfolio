import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <p>Home page for my awesome portfolio site (in progress)</p>
            <StaticImage
                alt="Seattle, Washington"
                src="../images/Seattle.jpg"
            />
        </Layout>
    )
}

export const Head = () => <Seo title="Home Page"/>

export default IndexPage