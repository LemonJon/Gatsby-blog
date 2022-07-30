import React from "react";
import { graphql, useStaticQuery } from 'gatsby'

import * as footerStyles from './footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)
    return (
        <footer className={footerStyles.footer}>
            <p>Created by <a className={footerStyles.a} target="__blank" href="https://www.degrell.se" rel="noreferrer">{data.site.siteMetadata.author}</a>, © 2022</p>
        </footer>
    )
}

export default Footer