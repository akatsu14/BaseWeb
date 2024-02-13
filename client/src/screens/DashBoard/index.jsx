import { SVGTitle } from "@commons/ItemIconSVG";
import Fab from "@components/Fab";
import HeaderBar from "@components/HeaderBar";
import ItemTrong from "@components/ItemTrong";
import { PostContext } from "@contexts/PostContext";
import { ScreenName } from "@navigates/ScreenName";
import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ItemSach from "./Item/ItemSach";
import ModalPost from "./Item/ModalPost";
const DashBoard = () => {
  const navigate = useNavigate();
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
  const [sortValue, setSortValue] = useState("createAt");
  const goToBookStore = () => {
    navigate(ScreenName.BookStore);
  };
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
  const onChooseSortValue = (value) => setSortValue(value);
  const handleClose = () => setIsShowAddBook(false);
  const handleShow = () => setIsShowAddBook(true);
  useEffect(() => {
    getBook();
  }, [sortValue]);
  const getBook = async () => {
    try {
      const res = await getPosts({ sortValue });
      setData(res);
      console.log("🚀 ~ getBook ~ res:", res);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("🚀 ~ file: index.jsx ~ line 14 ~ DashBoard ~ data", data);
  const onRefresh = async () => {
    try {
      const res = await getPosts({ sortValue });
      setData(res);
      console.log("🚀 ~ getBook ~ res:", res);
    } catch (error) {
      console.log(error);
    }
  };
  const FilterList = () => {
    return (
      <div
        id="filters"
        className="flex flex-row items-center justify-between w-full"
      >
        <div id="searchFilter" className="flex flex-col mr-2">
          <label htmlFor="search">Tìm kiếm sách:</label>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Tìm kiếm sách"
            className="border border-r-4"
          />
        </div>
        <div id="sortFilter" className="flex flex-col">
          <label htmlFor="sort">Chọn thứ tự sắp xếp:</label>
          <select
            id="sort"
            name="sort"
            className="border border-r-4"
            onChange={(e) => onChooseSortValue(e.target.value)}
          >
            <option value="createAt">Sắp xếp theo ngày tạo</option>
            <option value="title">Sắp xếp theo tên</option>
            <option value="price">Sắp xếp theo giá</option>
          </select>
        </div>
      </div>
    );
  };
  return (
    <div className="flex min-h-screen bg-gray-50  flex-col w-screen">
      <HeaderBar onRefresh={onRefresh} />
      <div
        id="background"
        className="flex flex-col justify-center align-middle p-3 "
      >
        <div
          id="listItem"
          className="flex flex-col min-h-screen bg-white w-4/5 rounded-lg mx-auto justify-center items-center p-3"
        >
          <FilterList />
          <Row lg={2} className="w-full m-0 p-0">
            {data.length ? (
              data?.map((item, index) => (
                <Col key={item._id} className="mt-3">
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
        </div>
        <Fab
          onClick={goToBookStore}
          iconTitle={SVGTitle.IconShopping}
          className="bottom-32"
        />
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
