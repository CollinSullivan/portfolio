import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>This is a page about me!</p>
            <StaticImage
                alt="A Husky from the University of Washington, just like me!"
                src="../images/dubs.jpg"
            />
        </Layout>
    )
}

export const Head = () => <Seo title="About"/>

export default AboutPage