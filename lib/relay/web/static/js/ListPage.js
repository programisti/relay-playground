import React from 'react'
import Post from './Post'
import { Link } from 'react-router'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'

class ListPage extends React.Component {
  render () {
    console.log('ListPage', this.props)

    return (
      <div>
        {this.props.viewer.allPosts.edges.map(({node}) =>
          <Post key={node.id} post={node} viewer={this.props.viewer} />
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
          ...Post_post
        }
      }
    }
  }
`)
