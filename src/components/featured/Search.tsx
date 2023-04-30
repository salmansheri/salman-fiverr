import React from "react";
import { BsSearch } from "react-icons/bs";
import Input from "../Input/Input";

const Search = () => {
  return (
    <>
      <div className=" flex items-center gap-3 w-full">
        <BsSearch size={30} color="black" />
        <Input className="outline-none border-0 w-full placeholder:text-black text-black p-4"  placeholder="Try Building app" />
      <button className=" w-32 h-14 border-0 bg-green text-white ">Search</button>
      </div>
    </>
  );
};

export default Search;
