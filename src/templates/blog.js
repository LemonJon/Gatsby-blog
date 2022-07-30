import React from 'react'
import { graphql } from 'gatsby'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { BLOCKS } from '@contentful/rich-text-types';
import Head from "../components/head"

import Layout from '../components/layout'


export const query = graphql`
    query(
        $slug:String!
        ){
        contentfulBlogPost(
            slug: {
                eq:$slug
            }
        ) {
            title
            publishedDate (
                formatString: "MMMM Do, YYYY"
            )
            body{
                raw
                references {
                    ... on ContentfulAsset {
                        contentful_id
                        title
                        description
                        gatsbyImageData(width: 1600)
                        __typename
                    }
                }
            }
        }   
    }
`

const Blog = ({data}) => {
    const options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const { gatsbyImageData, description } = node.data.target
               // const alt = node.data.target.title
               // const url = node.data.target.fixed.src
                return (
                    <GatsbyImage 
                        image={getImage(gatsbyImageData)}
                        alt={description}
                    />
                    //<img alt={alt} src={url} />
                )
            },
        },
      }

    return(
        <Layout>
            <Head title={data.contentfulBlogPost.title}/>
            <h1>{data.contentfulBlogPost.title}</h1>
            <p>{data.contentfulBlogPost.publishedDate}</p>
            {renderRichText(data.contentfulBlogPost.body, options)}
        </Layout>
    )
}

export default Blog