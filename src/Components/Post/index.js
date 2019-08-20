import React from 'react';

export default function Post(props) {
  return(
    <div className="post-container">
      <div className="post-title">
        <a className="title" href={`/posts/${props.post.id}`}>{props.post.title}</a>
      </div>
      <div className="post-body">
        <p className="body">{props.post.body}</p>
      </div>
      { props.post.authorized ? <div className="buttons">
        <button className="update"><a href={`/posts/${props.post.id}/edit`}>Update</a></button>
        <button className="delete" onClick={props.onDelete}>Delete</button>
      </div>: null}
    </div>
  )
}