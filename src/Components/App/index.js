import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import PostsIndexPage from '../PostsIndexPage';
import PostsShowPage from '../PostsShowPage';
import SignInPage from '../SignInPage';
import Navbar from '../Navbar';
import {Session} from '../../api/requests';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }

    this.signIn = this.signIn.bind(this);
  }

  componentDidMount() {
    this.setState({
      currentUser: localStorage.currentUser
    })
  }

  signIn(params) {
    Session.create(params)
    .then(data => {
      if (data.id) {
        localStorage.setItem("currentUser", data.id)
        this.setState({
          currentUser: data.id
        })
      }
    });
  }


  render() {
    return(
      <div className="main">

        <BrowserRouter>
          <Navbar isAuth={this.state.currentUser ? true : false}/>
          <Route exact path="/posts" component={PostsIndexPage}></Route>
          <Route exact path="/posts/:id" component={PostsShowPage}></Route>
          <Route exact path="/sign_in" component={() => <SignInPage signIn={this.signIn} />}></Route>
        </BrowserRouter>
      </div>
    )
  }
}

