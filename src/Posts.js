import React from "react";
import { gql } from "@apollo/client";
import Post from "./Post";
import { Link } from "react-router-dom";
import { RoutePaths } from "./routes";
import { useQuery } from "react-query";
import { get } from "e-graphql-client";

function Posts() {
  const getAllStory = `
    {
      story {
        username
        caption
        imageUrl
        avatarUrl
        _id
      }
    }
  `;

  const { data } = useQuery("all-story", () =>
    get("http://localhost:8001/graphql", getAllStory)
  );
  return (
    <>
      {data?.map((story) => (
        <Link to={RoutePaths.likesPageById.replace(":postId", story._id)}>
          <Post
            username={story.username}
            caption={story.caption}
            imageUrl={story.imageUrl}
            avatarUrl={story.avatarUrl}
          />
        </Link>
      ))}
    </>
  );
}

export default Posts;
