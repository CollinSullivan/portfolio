import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
    footer,
    main
 } from './layout.module.css'

const Layout = ({ pageTitle, children}) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)



    return (
        <div className={container}>
            <header className={siteTitle}>{data.site.siteMetadata.title}</header>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>Home</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/about" className={navLinkText}>About</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/projects" className={navLinkText}>Projects</Link>
                    </li>
                </ul>
            </nav>
            <main className={main}>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
            <footer className={footer}>
                <p>Copyright © {new Date().getFullYear()}
                {` `}
                <Link to="/" className={navLinkText}>My Portfolio Site</Link>
                </p>
            </footer>
        </div>
    )
}

export default Layout