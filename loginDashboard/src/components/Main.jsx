import React from "react";

const Main = () => {
  return (
    <div className="flex items-center justify-center py-24 px-7">
      <div className="flex flex-col items-center justify-center h-96 w-96 max-w-md ">
        <h2 className="text-5xl font-bold m-10">Welcome!</h2>

        <div className="btnLogin flex mr-1.5 gap-5">
          <div className="btnGoogle ">
            <button className="bg-red-500 font-bold p-2 px-10 rounded-full text-white text-xs">
              Continue with Goggle
            </button>
          </div>

          <div className="btnFacebook ">
            <button className="bg-blue-500 font-bold p-2 px-10 rounded-full text-white text-xs">
              Continue with Facebook
            </button>
          </div>
        </div>

        <div className="gap-5 flex flex-col">
          <input className="bg-gray-100" type="text" />
          <input className="bg-gray-100" type="text" />
        </div>
      </div>
    </div>
  );
};

export default Main;
