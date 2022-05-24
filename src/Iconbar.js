import React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { gql } from 'graphql-request';
import { useQuery } from 'react-query';
import { get } from 'e-graphql-client';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import Like from './Like';

function LikedBy({ likes }) {
  const getAllLikes = gql`
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
    'getAllLike',
    async () => await get('http://localhost:8001/graphql', getAllLikes)
  );
  return (
    <div>
      <Stack direction="row" spacing={0}>
        <IconButton>
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton>
          <CommentOutlinedIcon />
        </IconButton>
        <IconButton>
          <SendOutlinedIcon />
        </IconButton>
      </Stack>
    </div>
  );
}

export default LikedBy;
