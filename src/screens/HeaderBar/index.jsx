import bookLibrary from "@assets/images/bookLibrary.svg";
import { AuthContext } from "@contexts/AuthContexts";
import React, { useContext } from "react";

const HeaderBar = () => {
  const { logout } = useContext(AuthContext);
  const onLogOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-green-500 flex flex-row items-center justify-between w-full py-3 pl-0 pr-3">
      <div className="flex flex-row">
        <img src={bookLibrary} alt="bookLibrary" />
        <h2 className="">My Book</h2>
      </div>
      <div className="flex flex-row">
        {/* <button className="bg-blue-500">Add Book</button> */}
        <button className="bg-blue-500" onClick={onLogOut}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default HeaderBar;
