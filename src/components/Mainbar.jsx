import React from "react";

const Mainbar = () => {
  return (
    <>
      <div className="avatar  shadow-md w-full p-2">
        <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2 ">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
        <div className="flex">
          <h2 className=" ml-3"> Name</h2>
          <p className="  text-gray-500 ml-3">online</p>
        </div>
      </div>
    </>
  );
};

export default Mainbar;
