import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { 
    container,
    navLinks,
    navLinkItem,
    navLinkText,
    siteHeader,
    footer,
    main,
    childContent,
    logo
 } from '../styles/layout.module.css'

const Layout = ({ pageTitle, children}) => {



    return (
        <div className={container}>
            <header className={siteHeader}>
                <StaticImage
                    alt="collincodes logo"
                    src="../images/logos/svg/logo-no-background.svg"
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
                    <li className={navLinkItem} key="linkedin">
                        <a href="https://www.linkedin.com/in/collin-j-sullivan/"  target="_blank" rel="noreferrer" className={navLinkText}>LINKEDIN</a>
                    </li>
                </ul>

            </header>
            <main className={main}>
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