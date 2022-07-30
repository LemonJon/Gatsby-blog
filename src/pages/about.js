import React from "react";
import { Link } from 'gatsby'

import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
    return (
        <Layout>
            <Head title="about" />
            <h1>About</h1>
            <p>My name is Jonas</p>
            <p>Need to get in touch? <Link to="/contact">Contact me</Link></p>
        </Layout>
    )
}

export default AboutPage