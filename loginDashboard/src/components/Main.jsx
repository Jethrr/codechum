import React from "react";

const Main = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h2 className="text-5xl font-bold m-10">Welcome!</h2>

      <div className="btnLogin flex mr-1.5 gap-5">
        <div className="btnGoogle ">
          <button className="bg-red-500 p-2 px-10 rounded-full text-white">
            Continue with Goggle
          </button>
        </div>

        <div className="btnFacebook ">
          <button className="bg-blue-500 p-2 px-10 rounded-full text-white">
            Continue with Facebook
          </button>
        </div>
      </div>

      <div className="gap-5 flex flex-col">
        <input className="bg-gray-100" type="text" />
        <input className="bg-gray-100" type="text" />
      </div>
    </div>
  );
};

export default Main;
