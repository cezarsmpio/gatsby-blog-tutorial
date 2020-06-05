import React from "react"
import { graphql, Link } from "gatsby"

const IndexPage = props => (
  <div>
    <header>
      <h1>{props.data.site.siteMetadata.title}</h1>
      <p>{props.data.site.siteMetadata.description}</p>
      <p>Written by: {props.data.site.siteMetadata.author}</p>
    </header>

    <main>
      {props.data.allContentfulArticle.nodes?.map((article, index) => (
        <div key={index}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <Link to={`/article/${article.slug}`}>Read</Link>
        </div>
      ))}
    </main>
  </div>
)

export default IndexPage

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }

    allContentfulArticle {
      nodes {
        title
        slug
        description
        content {
          json
        }
      }
    }
  }
`
