import React from 'react'
import Post from './Post'
import { Link } from 'react-router'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'

class ListPage extends React.Component {
  render () {
    return (
      <div className="row">
        {this.props.viewer.allPosts.edges.map(({node}) =>
          <Post key={node.id} post={node} />
        )}
      </div>
    )
  }
}
export default createFragmentContainer(ListPage, graphql`
  fragment ListPage_viewer on Viewer {
    allPosts(first: 3) @connection(key: "ListPage_allPosts", filters: []) {
      edges {
        node {
          id
          title
          body
          createdAt
          ...Post_post
          author {
            id
            name
            email
            ...Author_author
          }
          comments {
            edges {
              node {
                id
                text
                author {
                  name
                }
                ...Comment_comments
              }
            }
          }
        }
      }
    }
  }
`)
