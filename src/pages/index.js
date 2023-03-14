import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <div style={{display: "flex", flexDirection:"row", paddingTop: "10%"}}>
                <div style={{paddingLeft: "12.5%", width: "25%", paddingRight: "12.5%", marginRight:"12.5%"}}>
                    <h1 style={{fontSize: "4rem", display: "flex", justifyContent: "start", flexDirection:"row", margin: "0", padding: "0"}}><span style={{fontWeight: "10", marginRight:"1rem"}}>I'M</span> <span style={{fontWeight: "900"}}>COLLIN</span></h1>
                    <h2 style={{fontWeight: "600", margin: "0", padding:"0"}} >SOFTWARE ENGINEER</h2>
                    <h3 style={{fontWeight: "300", margin: "0", padding:"0"}}>BASED IN BOSTON, MASSACHUSETTS</h3>
                    <p style={{fontWeight: "100", width: "22rem", margin:"0", padding:"0"}}>Are you looking for a highly capable and motivated software engineer who is just starting out in their career? Look no further! As a recent graduate with a strong academic background and hands-on experience in software development, I am eager to apply my skills and knowledge to a challenging position that will allow me to grow and thrive. With a passion for learning and a dedication to excellence, I am confident that I can make a positive impact on your team and contribute to your company's success. Contact me today to learn more about how I can help you achieve your goals!</p>
                </div>
                <StaticImage
                    alt="collincodes logo"
                    src="../images/logos/png/logo-color.png"
                    style={{width: "50%", height: "50%", borderRadius: "50%", marginLeft: "12.5%", marginRight: "12.5%"}}/>
            </div>
            <br/>
        </Layout>
    )
}

export const Head = () => <Seo title="Home Page"/>

export default IndexPage