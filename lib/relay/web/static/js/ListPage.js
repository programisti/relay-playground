import React from "react";
import Post from "./Post";
import { Link } from "react-router";
import { createPaginationContainer, graphql } from "react-relay";

class ListPage extends React.Component {
  render() {
    console.log('thiprops.relay', this.props.relay)
    return (
      <div className="row">
        {this.props.viewer.allPosts.edges.map(({ node }) =>
          <Post key={node.id} post={node} />
        )}
        <button onClick={() => this._loadMore()}>Load More</button>
      </div>
    );
  }
  _loadMore() {
    console.log(this.props.relay.hasMore())
    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
      return;
    }

    this.props.relay.loadMore(2, e => { console.log('exception', e) });
  }
}
export default createPaginationContainer(
  ListPage,
  {
    viewer: graphql`
      fragment ListPage_viewer on Viewer {
        allPosts(first: $count, after: $cursor) @connection(key: "ListPage_allPosts") {
          pageInfo{
            hasNextPage
            endCursor
          }
          edges {
            cursor
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
    `
  },
  {
    direction: 'forward',
    getConnectionFromProps(props) {
      console.log('getConn from Props', props)
      return props.viewer.allPosts
    },
    getFragmentVariables(prevVars, totalCount) {
      console.log('getFragVars', totalCount)
      return { ...prevVars, count: totalCount };
    },
    getVariables(props, {count, cursor}, fragmentVariables) {
      console.log('getVariables', count)
      return { count, cursor };
    },
    query: graphql`
      query ListPageQuery(
        $count: Int!
        $cursor: String
      ) {
        viewer {
          ...ListPage_viewer
        }
      }
    `
  }
);
