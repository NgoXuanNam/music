import React from "react";
import { ImMusic } from "react-icons/im";

export default function Header() {
  return (
    <div className="header h-[var(--height-header)] bg-slate-800 flex justify-center items-center">
      <h1 className="text-center text-[3rem] text-[#fff] font-medium">
        Music <ImMusic className="inline-block " />
      </h1>
    </div>
  );
}
