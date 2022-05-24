import React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function LikedBy() {
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
