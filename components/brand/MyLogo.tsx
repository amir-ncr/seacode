import React from "react";

const MyLogo = () => {
  return (
    <a
      className=" hover:opacity-75 transition-all duration-300 ease-in-out"
      href="/">
      <div className=" text-3xl font-Manrope font-bold">
        <img
          src="/LogoNoPaddings.png"
          className=" invert dark:invert-0 size-12"
          alt=""
        />
      </div>
    </a>
  );
};

export default MyLogo;
