import Fab from "@components/Fab";
import ItemTrong from "@components/ItemTrong";
import { PostContext } from "@contexts/PostContext";
import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import HeaderBar from "./Item/HeaderBar";
import ItemSach from "./Item/ItemSach";
import ModalPost from "./Item/ModalPost";
const DashBoard = () => {
  const {
    postState: { posts, postsLoading },
    getPosts,
    createPost,
  } = useContext(PostContext);
  const [data, setData] = useState([]);
  const [postForm, setPostForm] = useState({
    title: "",
    price: 0,
    ngayMua: "",
    img: "",
    status: "",
  });

  const onChangeForm = (e) => {
    setPostForm({ ...postForm, [e.target.name]: e.target.value });
  };
  const [isShowAddBook, setIsShowAddBook] = useState(false);

  const onAddBook = async (e) => {
    e.preventDefault();
    try {
      const res = await createPost(postForm);
      console.log("🚀 ~ HeaderBar ~ res:", res);
      setIsShowAddBook(false);
      setPostForm({ title: "", price: 0, ngayMua: "", img: "", status: "" });
      await onRefresh();
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => setIsShowAddBook(false);
  const handleShow = () => setIsShowAddBook(true);
  useEffect(() => {
    getBook();
  }, []);
  const getBook = async () => {
    try {
      const res = await getPosts();
      setData(res);
      console.log("🚀 ~ getBook ~ res:", res);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("🚀 ~ file: index.jsx ~ line 14 ~ DashBoard ~ data", data);
  const onRefresh = async () => {
    try {
      const res = await getPosts();
      setData(res);
      console.log("🚀 ~ getBook ~ res:", res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex min-h-screen bg-gray-50  flex-col w-screen">
      <HeaderBar onRefresh={onRefresh} />
      <div id="background" className="flex justify-center align-middle p-3 ">
        <Row
          id="listItem"
          className="flex min-h-screen bg-white h-full w-4/5 rounded-lg row-cols-1 row-cols-md-2 mx-auto pb-3"
        >
          {data.length ? (
            data?.map((item, index) => (
              <Col key={item._id} className="px-3 pt-3">
                <ItemSach
                  item={item}
                  key={item?._id}
                  isLast={index === data.length - 1}
                  onRefresh={onRefresh}
                />
              </Col>
            ))
          ) : (
            <ItemTrong />
          )}
        </Row>
        <Fab onClick={handleShow} />
      </div>
      <ModalPost
        onPost={onAddBook}
        visible={isShowAddBook}
        onClose={handleClose}
        onChangeForm={onChangeForm}
        postForm={postForm}
        isAdd={true}
      />
    </div>
  );
};

export default DashBoard;
