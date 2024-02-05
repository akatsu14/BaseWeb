import bookLibrary from "@assets/images/bookLibrary.svg";
import ItemIconSVG, { SVGTitle } from "@commons/ItemIconSVG";
import { functionAlert } from "@commons/functions";
import { AuthContext } from "@contexts/AuthContexts";
import React, { useContext } from "react";

const HeaderBar = (props) => {
  const {
    authState: {
      user: { username },
    },
    logout,
  } = useContext(AuthContext);
  const onLogOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogOut = () => {
    functionAlert(
      "Are you sure?",
      "Do you want to log out?",
      () => {},
      () => onLogOut
    );
  };
  return (
    <div className="bg-green-500 flex flex-row items-center justify-between w-full py-3 pl-0 pr-3 ">
      <div className="flex flex-row">
        <img src={bookLibrary} alt="bookLibrary" />
        <h2 className="">My Book</h2>
      </div>
      <div>Xin chào {username}</div>
      <button
        className="bg-blue-500 flex flex-row justify-center items-center"
        onClick={handleLogOut}
      >
        <label className="mr-2">Logout</label>
        <ItemIconSVG title={SVGTitle.IconLogOut} className="w-4 h-4" />
      </button>
    </div>
  );
};

export default HeaderBar;
