const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/article.js`)
  const result = await graphql(
    `
      {
        allContentfulArticle {
          nodes {
            id
            slug
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog post pages.
  result.data.allContentfulArticle.nodes.forEach(node => {
    createPage({
      // Path for this page — required
      path: `/article/${node.slug}`,
      component: blogPostTemplate,
      context: {
        // Add optional context data to be inserted
        // as props into the page component.
        //
        // The context data can also be used as
        // arguments to the page GraphQL query.
        //
        // The page "path" is always available as a GraphQL
        // argument.

        id: node.id, // this will be available on graphql query as ($id: String)
      },
    })
  })
}
