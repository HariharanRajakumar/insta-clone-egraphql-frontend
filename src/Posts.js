import React from 'react';
import { useQuery } from 'react-query';
import { gql } from 'graphql-request';
import { get } from 'e-graphql-client';
import Post from './Post';

function Posts() {
  const getAllStory = gql`
    {
      story {
        username
        caption
        imageUrl
        avatarUrl
      }
    }
  `;

  const { loading, error, data } = useQuery(
    'getAllStory',
    async () => await get('http://localhost:8001/graphql', getAllStory)
  );

  return (
    <div>
      {data?.map((story) => (
        <Post
          username={story.username}
          caption={story.caption}
          imageUrl={story.imageUrl}
          avatarUrl={story.avatarUrl}
        />
      ))}
    </div>
  );
}

export default Posts;
