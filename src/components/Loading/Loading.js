import React from "react";
import loading from "~/assets/img/loading.gif";
export default function Loading() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center ">
      <img src={loading} alt="loading..." className="w-[15rem]" />
    </div>
  );
}
