import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import '../styles/theme.css'

const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <div style={{display: "flex", flexDirection:"row", paddingTop: "10%"}}>
                <div style={{ width: "50%", paddingRight:"20%"}}>
                    <h1 style={{fontSize: "4rem", display: "flex", justifyContent: "start", flexDirection:"row", margin: "0", padding: "0"}}><span style={{fontWeight: "10", marginRight:"1rem"}}>I'M</span> <span style={{fontWeight: "900", color: "var(--primary-color)"}}>COLLIN</span></h1>
                    <h2 style={{fontWeight: "600", margin: "0", padding:"0"}} >SOFTWARE ENGINEER</h2>
                    <h3 style={{fontWeight: "300", margin: "0", padding:"0"}}>BASED IN BOSTON, MASSACHUSETTS</h3>
                    <p style={{fontWeight: "100", margin:"0", padding:"0"}}>Are you looking for a highly capable and motivated software engineer who is just starting out in their career? Look no further! As a recent graduate with a strong academic background and hands-on experience in software development, I am eager to apply my skills and knowledge to a challenging position that will allow me to grow and thrive. With a passion for learning and a dedication to excellence, I am confident that I can make a positive impact on your team and contribute to your company's success. Contact me today to learn more about how I can help you achieve your goals!</p>
                </div>
                <StaticImage
                    alt="headshot of Collin Sullivan"
                    src="../images/headshot.jpeg"
                    style={{ marginRight: "20%", marginLeft: "15%", borderRadius: "50%", width: "25%", height: "25%", maxWidth: "400px", maxHeight: "400px", minWidth: "100px", minHeight: "100px"}}/>
            </div>
            <br/>
        </Layout>
    )
}

export const Head = () => <Seo title="Home Page"/>

export default IndexPage