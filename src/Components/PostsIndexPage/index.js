import React from 'react';
import {Post} from '../../api/requests';

export default class PostsIndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: null
    }
  }

  componentDidMount() {
    Post.all().then(data => {
      this.setState({
        posts: data.posts
      })
    })
  }

  render() {
    if (!this.state.posts) {
      return(<div className="no-posts">No posts found</div>)
    }

    return(
      <div className="posts-container">
        { this.state.posts.map((post, index) => {
          return(<div className="post" key={index}>
            <h1 className="post-title">{post.title}</h1>
            <p className="post-body">{post.body}</p>
          </div>)
        })}
      </div>
    )
  }
}
