import { PostContext } from "@contexts/PostContext";
import React, { useContext, useEffect } from "react";
import HeaderBar from "../HeaderBar";
const DashBoard = () => {
  const {
    postState: { posts, postsLoading },
    getPosts,
  } = useContext(PostContext);
  useEffect(() => {
    getBook();
  }, []);
  const getBook = async () => {
    try {
      const res = await getPosts();
      console.log("🚀 ~ getBook ~ res:", res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-red-300 flex flex-col ">
      <HeaderBar />
      <div className="flex flex-row justify-center items-center h-full">
        <div></div>
      </div>
    </div>
  );
};

export default DashBoard;
