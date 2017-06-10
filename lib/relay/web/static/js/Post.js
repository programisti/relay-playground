import React from 'react'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'

class Post extends React.Component {

  render () {
    return (
      <div>
        {this.props.post.title}
      </div>
    )
  }
}

export default createFragmentContainer(Post, graphql`
  fragment Post_post on Post {
    id
    title
    body
  }
`)
