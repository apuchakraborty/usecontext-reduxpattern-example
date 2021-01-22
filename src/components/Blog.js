import React, { useEffect, useContext } from "react";
import { SET_POSTS, SET_ERROR } from "../context/type";

import axios from "axios";
import { Context } from "../store";

const Blog = () => {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    axios
      .get("https://fast-meadow-28384.herokuapp.com/api/posts")
      .then((response) => {
        const postsData = response.data;
        dispatch({ type: SET_POSTS, payload: postsData });
      })
      .catch((error) => {
        dispatch({ type: SET_ERROR, payload: error });
      });
  }, []);

  let posts = <p>Loading...</p>;

  if (state.error) {
    posts = (
      <p>
        Something went wrong: <span>{state.error}</span>
      </p>
    );
  }

  if (!state.error && state.posts) {
    posts = state.posts.map((post) => {
      return <div key={post.id}>{post.title}</div>;
    });
  }

  return { posts };
};

export default Blog;
