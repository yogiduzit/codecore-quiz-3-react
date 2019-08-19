import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import PostsIndexPage from '../PostsIndexPage';
import PostsShowPage from '../PostsShowPage';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="main">
        <BrowserRouter>
          <Route exact path="/posts" component={PostsIndexPage}></Route>
          <Route exact path="/posts/:id" component={PostsShowPage}></Route>
        </BrowserRouter>
      </div>
    )
  }
}

