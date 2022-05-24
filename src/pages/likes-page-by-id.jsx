import { useQuery } from "react-query";
import { CircularProgress } from "@material-ui/core";
import request, { gql } from "graphql-request";
import { useParams } from "react-router-dom";
import { getCacheKeyForLikesForPostById } from "../utils/cache";
import { Box, Typography, Avatar } from "@material-ui/core";
import { get } from "e-graphql-client";

const GET_LIKES_FOR_POST_BY_ID = (id) => `
    {
        likes(id:"${id}"){
            user_name
            avatar
        }
    }
`;

export function LikesPageById() {
  const { postId } = useParams();
  const { data, isLoading } = useQuery(
    getCacheKeyForLikesForPostById(postId),
    () => get("http://localhost:8001/graphql", GET_LIKES_FOR_POST_BY_ID(postId))
  );

  if (isLoading) return <CircularProgress />;
  console.log({ data });
  return (
    <Box
      style={{
        display: "flex",
        alignItems: "start",
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: "40%",
      }}
    >
      {data.map(({ user_name, avatar }) => (
        <Box
          style={{
            display: "flex",
            paddingTop: "1rem",
            background: "lightgray",
            minWidth: "300px",
          }}
        >
          <Avatar src={avatar.split("?")[0]} />
          <Typography> {user_name} </Typography>
        </Box>
      ))}
    </Box>
  );
}
