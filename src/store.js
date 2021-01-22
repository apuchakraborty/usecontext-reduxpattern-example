import React, { createContext, useReducer } from "react";
import postReducer from "./context/postReducer";

const initialState = {
  posts: [],
  error: null
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;
