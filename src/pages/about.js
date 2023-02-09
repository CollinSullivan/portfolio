import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>This is a page about me!</p>
            <StaticImage
                alt="A Husky from the University of Washington, just like me!"
                src="https://images.seattletimes.com/wp-content/uploads/2018/03/dubs1.jpg?d=960x609"
            />
        </Layout>
    )
}

export const Head = () => <title>About Me</title>

export default AboutPage