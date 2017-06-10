import {
  commitMutation,
  graphql,
} from 'react-relay'
import environment from './createRelayEnvironment'

const mutation = graphql`
  mutation CreatePostMutation($input: CreatePostInput!) {
    createPost(input: $input) {
      post {
        id
        title
        body
      }
    }
  }
`

export default function CreatePostMutation(title, body, callback) {
  const variables = {
    input: {
      title: title,
      body: body,
      authorid: "cj3rd0wd215io01778lp0l1f6"
      clientMutationId: ""
    },
  }
  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response) => {
        console.log('oncompleted', response, environment)
        callback(response.createPost.post)
      },
      onError: err => console.error(err),
    },
  )
}
