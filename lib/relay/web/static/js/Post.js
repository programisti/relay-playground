import React from 'react'
import Author from './Author'
import Comment from './Comment'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'

class Post extends React.Component {

  render () {
    const { post } = this.props
    return (
      <div className="blog-post">
        <h2 className="blog-post-title">{post.title}</h2>
        <p className="blog-post-meta">{post.createdAt} by <a href="#">{post.author.name} </a></p>
        <p>{post.body}</p>
        <br />
        <Comment comments={post.comments} />
      </div>
    )
  }
}

export default createFragmentContainer(Post, graphql`
  fragment Post_post on Post {
    id
    title
    body
    createdAt
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
`)
