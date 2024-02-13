import { SVGTitle } from "@commons/ItemIconSVG";
import Fab from "@components/Fab";
import HeaderBar from "@components/HeaderBar";
import ItemTrong from "@components/ItemTrong";
import { ScreenName } from "@navigates/ScreenName";
import React from "react";
import { useNavigate } from "react-router-dom";
const BookStore = () => {
  const navigate = useNavigate();
  const handleShow = () => {
    console.log("handleShow");
  };
  const goToMyBook = () => {
    navigate(ScreenName.DashBoard);
  };
  return (
    <div className="flex min-h-screen bg-gray-50  flex-col w-screen">
      <HeaderBar mainText="Book Store" />
      <div id="background" className="flex justify-center align-middle p-3 ">
        <div
          id="listItem"
          className="flex min-h-screen bg-white w-4/5 rounded-lg mx-auto justify-center items-start p-3"
        >
          <ItemTrong />
        </div>
        <Fab
          onClick={goToMyBook}
          iconTitle={SVGTitle.IconMyBook}
          className="bottom-32"
        />
        <Fab onClick={handleShow} />
      </div>
    </div>
  );
};
export default BookStore;
