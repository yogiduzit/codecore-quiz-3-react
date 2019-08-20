import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import PostsIndexPage from '../PostsIndexPage';
import PostsShowPage from '../PostsShowPage';
import SignInPage from '../SignInPage';
import Navbar from '../Navbar';
import AuthRoute from '../AuthRoute';
import NewPostPage from '../NewPostPage';
import EditPostPage from '../EditPostPage';

import { User } from '../../api/requests';



export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: localStorage.currentUser
    }

    this.getCurrentUser = this.getCurrentUser.bind(this);
  }

  componentDidMount() {

  }

  getCurrentUser(arg) {
    User.current().then(data => {
        this.setState({
          currentUser: data.current_user ? data.current_user.id : null
        });

        return arg;
    })
  }



  render() {
    return(
      <div className="main">
        <BrowserRouter>
          <Navbar isAuth={this.state.currentUser ? true : false} getCurrentUser={this.getCurrentUser} />
          <Route exact path="/posts" component={PostsIndexPage}></Route>
          <Route exact path="/posts/:id" component={PostsShowPage}></Route>
          <Route exact path="/sign_in" render={(routeProps) => <SignInPage onSignIn={this.getCurrentUser} {...routeProps}/>}></Route>
          <AuthRoute path="/post/new" component={NewPostPage} isAuth={this.state.currentUser} />
          <AuthRoute path="/posts/:id/edit" component={EditPostPage} isAuth={this.state.currentUser} />
        </BrowserRouter>
      </div>
    )
  }
}


