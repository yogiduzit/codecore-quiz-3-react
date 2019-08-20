import React from 'react';
import { Posts } from '../../api/requests';
import Post from '../Post';

export default class PostsIndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: null
    }
  }

  componentDidMount() {
    Posts.all().then(data => {
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
          return <Post post={post} key={index}></Post>
        })}
      </div>
    )
  }
}
