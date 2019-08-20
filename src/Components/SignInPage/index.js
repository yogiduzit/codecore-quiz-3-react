import React from 'react';
import {Session} from '../../api/requests';

export default class SignInPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    const {name, value} = target;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    Session.create(this.state).then(data => {
      this.props.onSignIn();
      localStorage.setItem("currentUser", data.id)
    });

    this.props.history.push('/');
  }

  render() {
    return(
      <form className="sign-in-form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter email" name="email" onChange={this.handleChange}></input>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter password" name="password" onChange={this.handleChange}></input>
        </div>
        <input type="submit"></input>
      </form>
    )
  }
}