import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Article = props => (
  <div>
    <header>
      <h1>{props.data.site.siteMetadata.title}</h1>
      <p>{props.data.site.siteMetadata.description}</p>
      <p>Written by: {props.data.site.siteMetadata.author}</p>
    </header>

    <main>
      <h1>{props.data.contentfulArticle.title}</h1>
      <p>{props.data.contentfulArticle.description}</p>
      <article>
        {documentToReactComponents(props.data.contentfulArticle.content.json)}
      </article>
    </main>
  </div>
)

export default Article

export const query = graphql`
  query Article($id: String) {
    site {
      siteMetadata {
        title
        description
        author
      }
    }

    contentfulArticle(id: { eq: $id }) {
      title
      slug
      description
      content {
        json
      }
    }
  }
`
