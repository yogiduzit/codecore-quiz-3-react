import React from 'react';
import Post from '../Post';
import { Posts } from '../../api/requests';

export default class PostsShowPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: null
    }
  }

  componentDidMount() {
    Posts.find(this.props.match.params.id)
    .then(data => {
      this.setState({
        post: data.post
      })
    })
  }

  render() {
    if (!this.state.post) {
      return(<div className="errors-container">
        <h3 className="error">No such post found</h3>
      </div>)
    }
    
    return(
      <div className="post-container">
        <Post post={this.state.post}></Post>
      </div>

    )
  }
}