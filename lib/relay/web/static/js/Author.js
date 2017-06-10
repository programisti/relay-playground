import React from 'react'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'

class Author extends React.Component {

  render () {
    return (
      <div>
        {this.props.author.name}
      </div>
    )
  }
}

export default createFragmentContainer(Author, graphql`
  fragment Author_author on Author {
    id
    name
    email
  }
`)
