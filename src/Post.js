import React from 'react';
import './post.css';
import { Avatar } from '@material-ui/core';
import Iconbar from './Iconbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from 'react-router-dom';
import Like from './Like';

function Post({ username, caption, imageUrl, avatarUrl }) {
  const history = useHistory();
  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="post__avatar" alt={username} src={avatarUrl} />
        <h3>{username}</h3>
      </div>
      <img className="post__image" src={imageUrl} alt="" />
      <Iconbar />
      <a
        onClick={() => {
          history.push('/likes');
        }}
      >
        Likes
      </a>
      <h4 className="post__text">
        <strong>{username}</strong> : {caption}
      </h4>
    </div>
  );
}

export default Post;
