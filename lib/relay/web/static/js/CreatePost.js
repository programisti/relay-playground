import React from 'react'
import { withRouter } from 'react-router'
import CreatePostMutation from './CreatePostMutation'

class CreatePost extends React.Component {

  state = {
    title: '',
    body: '',
  }

  render () {
    return (
      <div className="row">
        <div style={{ maxWidth: 400 }}>
          <div className="input-group">
            <span className="input-group-addon" id="title">Title</span>
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              aria-describedby="title"
              value={this.state.title}
              onChange={(e) => this.setState({title: e.target.value})}
            />
          </div>
          <div className="input-group">
            <span className="input-group-addon" id="body">Body</span>
            <input
              type="text"
              className="form-control"
              placeholder="Body"
              aria-describedby="body"
              value={this.state.body}
              onChange={(e) => this.setState({body: e.target.value})}
            />
          </div>
          {this.state.body && this.state.title &&
            <button className='pa3 bg-black-10 bn dim ttu pointer' onClick={this._handlePost}>Post</button>
          }
        </div>
      </div>
    )
  }

  _handlePost = () => {
    const {title, body} = this.state
    let qwe = CreatePostMutation(title, body, (q) => console.log('callback', q))
    console.log('qwe', qwe)
  }

}

export default withRouter(CreatePost)
