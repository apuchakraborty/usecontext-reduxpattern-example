import React, { useEffect, useState, useContext } from "react";
import { SET_POSTS, SET_ERROR, REMOVE_POST } from "../context/type";

import axios from "axios";
import { Context } from "../store";

const Posts = () => {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const postsData = response.data;
        // console.log(postsData)
        dispatch({ type: SET_POSTS, payload: postsData });
      })
      .catch((error) => {
        dispatch({ type: SET_ERROR, payload: error });
      });
  });

  const deletePosts = (id) => {
    dispatch({
      type: REMOVE_POST,
      payload: id
    });
  };

  return (
    <div>
      <h3>posts</h3>
      {state.posts.map((post, index) => (
        <div key={post.id}>
          <h4>{index}</h4>
          <h4>{post.title}</h4>

          <p>{post.body}</p>

          <button onClick={() => deletePosts(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Posts;
