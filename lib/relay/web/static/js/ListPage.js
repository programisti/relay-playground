import React from 'react'
import Post from './Post'
import { Link } from 'react-router'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'
         // {this.props.viewer.allPosts.edges.map(({node}) =>
           // <Post key={node.id} post={node} viewer={this.props.viewer} />
         // )}

class ListPage extends React.Component {
  render () {
    console.log('ListPage',this.props)

    return (
      <div>

      </div>
    )
  }
}
export default createFragmentContainer(ListPage, graphql`
  fragment ListPage_posts on Post {
    allPosts(last: 3) @connection(key: "ListPage_allPosts) {
        id
        title
        body
    }
  }
`)
