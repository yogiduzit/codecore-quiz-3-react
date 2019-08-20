import React from 'react';
import { Posts } from '../../api/requests';

export default class EditPostPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {
        title: '',
        body: ''
      },
      errors: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    Posts.find(this.props.match.params.id)
    .then(data => {
      this.setState({
        post: {
          title: data.title,
          body: data.body
        },
        errors: []
      })
    })
  }

  handleChange(event) {
    const { target } = event;
    const {name, value } = target;

    const newData = {[name]: value}
    this.setState({
      post: {
        ...this.state.post,
        ...newData
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    Posts.update(this.state, this.props.match.params.id)
    .then(data => {
      console.log(data);
      if (data.errors) {
        this.setState({
          ...this.state,
          errors: data.errors
        })
      } else {
        this.props.history.push(`/posts/${data.post.id}`);
      }
    })
  }

  render() {
    return(
      <div className="form-container">
        {this.state.errors ? <ul className="form-errors">
          {this.state.errors.map((error, index) => {
            return <li className="error" key={index}>{error}</li>
          })}
        </ul>
        : null}



        <form className="post-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input type="text" name="title" placeholder="Enter title" onChange={this.handleChange} value={this.state.post.title}/>
          </div>
          <div className="form-group">
            <label>Body</label>
            <input type="text" name="body" placeholder="Enter something" onChange={this.handleChange} value={this.state.post.body}/>
          </div>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}