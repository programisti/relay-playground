import React from 'react'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'

class Comment extends React.Component {

  render () {
    const { comments } = this.props
    console.log(comments)
    if (comments.edges.length > 0) {
      return (
        <div className="row">
          <strong>Comments</strong>
          <div className="panel panel-default">
            <div className="panel-body">
              { comments.edges.map(({node}) =>
                <div key={node.id}><strong>{node.author.name}</strong>: {node.text}</div>
              )}
            </div>
          </div>
        </div>
      )
    } else {
      return(<div>Sorry there are no comments</div>)
    }
  }
}

export default createFragmentContainer(Comment, graphql`
  fragment Comment_comments on Comment {
    id
    text
    author {
      name
    }
  }
`)
