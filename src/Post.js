import React from 'react';
import './post.css';
import { Avatar } from '@material-ui/core';
import Iconbar from './Iconbar';

function Post({ username, caption, imageUrl, avatarUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="post__avatar" alt={username} src={avatarUrl} />
        <h3>{username}</h3>
      </div>
      <img className="post__image" src={imageUrl} alt="" />
      <Iconbar />
      <h4 className="post__text">
        <strong>{username}</strong> : {caption}
      </h4>
    </div>
  );
}

export default Post;
