import React from "react";

const Navbar = () => {
  return (
    <div className="flex p-5">
      <img src="/images/cody.png" className="w-24 ml-5" />
      <div className="flex  text-3xl font-bold justify-center items-center">
        <h2 className="text-blue-400">CODE</h2>
        <h2>CHUM</h2>
      </div>
    </div>
  );
};

export default Navbar;
