import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <div style={{display: "flex", flexDirection:"row", margin: "auto"}}>
                <div style={{display: "flex", justifyContent: "unset", marginLeft: "1rem", flexDirection: "column"}}>
                    <p style={{fontSize: "3rem", display: "flex", justifyContent: "space-evenly", flexDirection:"row"}}><span style={{fontWeight: "10", marginRight:"1rem"}}>I'M</span> <span style={{fontWeight: "900"}}>COLLIN</span></p>
                    <p style={{}}>Hi this is a test</p>
                </div>
                <StaticImage
                    alt="Seattle, Washington"
                    src="../images/Seattle.jpg"
                    style={{display: "flex", justifyContent: "space-evenly", borderRadius:"50%", width: "50%", margin: "auto"}}/>
            </div>
        </Layout>
    )
}

export const Head = () => <Seo title="Home Page"/>

export default IndexPage