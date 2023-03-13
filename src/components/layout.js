import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { 
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteHeader,
    footer,
    main,
    childContent,
    logo
 } from './layout.module.css'

const Layout = ({ pageTitle, children}) => {



    return (
        <div className={container}>
            <header className={siteHeader}>
                <StaticImage
                    alt="collincodes logo"
                    src="../images/logos/png/logo-no-background.png"
                    className={logo}
                />
                <ul className={navLinks}>
                    <li className={navLinkItem} key="home">
                        <Link to="/" className={navLinkText}>HOME</Link>
                    </li>
                    <li className={navLinkItem} key="about">
                        <Link to="/about" className={navLinkText}>ABOUT</Link>
                    </li>
                    <li className={navLinkItem} key="experience">
                        <Link to="/experience" className={navLinkText}>EXPERIENCE</Link>
                    </li>
                    <li className={navLinkItem} key="projects">
                        <Link to="/projects" className={navLinkText}>PROJECTS</Link>
                    </li>
                </ul>

            </header>
            <main className={main}>
                <h1 className={heading}>{pageTitle}</h1>
                <div className={childContent}>{children}</div>
            </main>
            <footer className={footer}>
                <p>Collin Sullivan | {new Date().getFullYear()} |
                {` `}
                <Link to="/">Home</Link>
                {` | `}
                <Link to="/about">About</Link>
                {` | `}
                <Link to="/experience">Experience</Link>
                {` | `}
                <Link to="/projects">Projects</Link>
                </p>
            </footer>
        </div>
    )
}

export default Layout