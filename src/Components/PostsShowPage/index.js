import React from 'react';
import Post from '../Post';
import { Posts } from '../../api/requests';

export default class PostsShowPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: null
    }

    this.deletePost = this.deletePost.bind(this);
  }

  componentDidMount() {
    Posts.find(this.props.match.params.id)
    .then(data => {
      this.setState({
        post: data
      })
    })
  }

  deletePost() {
    Posts.destroy(this.props.match.params.id)
    .then(data => {
      this.props.history.push('/posts')
    });
  }

  render() {
    if (!this.state.post) {
      return(<div className="errors-container">
        <h3 className="error">No such post found</h3>
      </div>)
    }
    
    return(
      <div className="post-container">
        <Post post={this.state.post} onDelete={this.deletePost}></Post>
      </div>

    )
  }
}