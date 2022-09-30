const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { encodeUrl } = require("./src/utils/helpers.js");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve("./src/templates/blog-post.tsx");
  const tagTemplate = path.resolve("src/templates/tags.tsx");

  const loadPosts = graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fields: { collection: { eq: "blog" } } }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
        tagsGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    // create blog posts
    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((post, index) => {
      const previous =
        index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: `blog${post.node.fields.slug}/`,
        component: postTemplate,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      });
    });

    // Extract tag data from query
    const tags = result.data.tagsGroup.group;
    // create tag pages
    tags.forEach((tag) => {
      createPage({
        path: `/tags/${encodeUrl(tag.fieldValue)}/`,
        component: tagTemplate,
        context: {
          tag: tag.fieldValue,
        },
      });
    });

    return null;
  });

  const loadPages = new Promise((resolve) => {
    graphql(`
      {
        allMarkdownRemark(filter: { fields: { collection: { eq: "page" } } }) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `).then((result) => {
      const pages = result.data.allMarkdownRemark.edges;

      pages.forEach(({ node }) => {
        const slug = node.fields.slug;
        createPage({
          path: `${slug}`,
          component: path.resolve(`src/templates/page.tsx`),
          context: { slug },
        });
      });
      resolve();
    });
  });

  return Promise.all([loadPosts, loadPages]);
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const parent = getNode(node.parent);
    createNodeField({
      node,
      name: "collection",
      value: parent.sourceInstanceName,
    });

    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
