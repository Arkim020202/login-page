import React from "react";

function AppInput({ ...props }) {
  return (
    <>
      <input
        className="border-b border-gray-400 px-2 pt-2 outline-none bg-transparent relative focus:placeholder:text-gray-300 focus:placeholder:-translate-y-6 placeholder:duration-[0.5s] h-[60px] text-white "
        required
        {...props}
      />
    </>
  );
}

export default AppInput;
