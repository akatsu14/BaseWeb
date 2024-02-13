import ItemIconSVG, { SVGTitle } from "@commons/ItemIconSVG";
import { functionAlert, toVND } from "@commons/functions";
import { PostContext } from "@contexts/PostContext";
import moment from "moment";
import React, { useContext, useState } from "react";
import ModalPost from "./ModalPost";

const ItemSach = (props) => {
  const { onRefresh, item, isLast } = props;
  const { title, price, ngayMua, img, status } = item;
  console.log("🚀 ~ ItemSach ~ item:", item);
  const { updatePost, deletePost } = useContext(PostContext);
  const [isShowEditBook, setIsShowEditBook] = useState(false);
  const [postForm, setPostForm] = useState(item);

  const onChangeForm = (e) => {
    setPostForm({ ...postForm, [e.target.name]: e.target.value });
  };

  const onEditBook = async (e) => {
    e.preventDefault();
    try {
      const res = await updatePost(postForm);
      console.log("🚀 ~ onEditBook ~ res:", res);
      setIsShowEditBook(false);
      await onRefresh();
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteBook = (e) => {
    e.preventDefault();
    functionAlert(
      "Xác nhận xóa",
      "Bạn có chắc chắn muốn xóa quyển sách này?",
      () => {},
      () => onDeleteBook(e)
    );
  };
  const onDeleteBook = async (e) => {
    e.preventDefault();
    try {
      const resDelete = await deletePost(item?._id);
      console.log("🚀 ~ onDeleteBook ~ resDelete:", resDelete);
      await onRefresh();
    } catch (error) {
      console.log(error);
    }
  };
  const handleClose = () => setIsShowEditBook(false);
  const handleShow = () => setIsShowEditBook(true);
  return (
    <div className="flex flex-col border rounded-lg">
      <div className="flex flex-row  p-3">
        <div className="w-40 flex items-center justify-center">
          <img src={img} alt="Ảnh quyển sách" className=" w-30 h-40 m-0 p-0 " />
        </div>
        <div className="flex flex-col justify-evenly">
          <div id="name" className="mb-1">
            <strong className="mr-1">Tên sách:</strong>
            <label>{title ?? "Chưa cập nhật"}</label>
          </div>
          <div id="price" className="mb-1">
            <strong className="mr-1">Giá mua:</strong>
            {toVND(price || 0) ?? "Chưa cập nhật"}
          </div>
          <div id="date-bought" className="mb-1">
            <strong className="mr-1">Ngày mua:</strong>
            {moment(ngayMua).format("DD/MM/yyyy") ?? "Chưa cập nhật"}
          </div>
          <div id="status" className="">
            <strong className="mr-1">Tình trạng:</strong>
            {status ?? "Chưa cập nhật"}
          </div>
        </div>
        <div className="justify-between ml-auto">
          <button
            id="delete-button"
            className=" hover:bg-red-300 m-0 p-2 w-fit"
            onClick={handleDeleteBook}
          >
            <ItemIconSVG title={SVGTitle.IconXoa} className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="mt-2 flex flex-row border-t-2 items-end p-2">
        <button
          id="edit-button"
          className="hover:bg-yellow-300 m-0 p-2 w-fit"
          onClick={handleShow}
        >
          <ItemIconSVG title={SVGTitle.IconEdit} className="w-4 h-4" />
        </button>
      </div>
      <ModalPost
        onChangeForm={onChangeForm}
        postForm={postForm}
        onPost={onEditBook}
        visible={isShowEditBook}
        onClose={handleClose}
      />
    </div>
  );
};
export default ItemSach;
