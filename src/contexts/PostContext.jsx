import { postReducer } from "@reducers/postReducer";
import axios from "axios";
import { createContext, useReducer } from "react";

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  const [postState, dispatch] = useReducer(postReducer, {
    posts: [],
    postLoading: true,
    post: null,
    postError: null,
  });

  //Get all posts
  const getPosts = async () => {
    try {
      const response = await axios.get(`${apiUrl}/posts`);
      console.log("🚀 ~ getPosts ~ response:", response);

      if (response.data.success) {
        dispatch({ type: "GET_POSTS", payload: response.data.posts });
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, msg: "Server error" };
    }
  };

  //Create post
  const createPost = async (newPost) => {
    try {
      const response = await axios.post(`${apiUrl}/posts`, newPost);
      if (response.data.success) {
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, msg: "Server error" };
    }
  };

  //Post context data
  const postContextData = { postState, getPosts, createPost };

  return (
    <PostContext.Provider value={postContextData}>
      {children}
    </PostContext.Provider>
  );
};
export default PostContextProvider;
