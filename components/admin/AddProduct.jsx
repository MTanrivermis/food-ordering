import Image from "next/image";
import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";
import { GiCancel } from "react-icons/gi";

const AddProduct = ({ setIsProductModal }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 after:content-[''] after:w-screen after:h-screen after:bg-white after:absolute after:top-0 after:left-0 after:opacity-60 grid place-content-center">
      <OutsideClickHandler onOutsideClick={() => setIsProductModal(false)}>
        <div className="w-full h-full grid place-content-center relative">
          <div className="relative z-50 md:w-[600px] w-[370px] bg-white border-2 p-10 rounded-3xl">
            <Title addClass="text-[40px] text-center">Add a New Product</Title>
            <div className="flex flex-col text-sm mt-6 ">
              <span className="font-semibold mb-1">Choose an image</span>
              <input type="file" />
            </div>

            <div className="flex flex-col text-sm mt-4 ">
              <span className="font-semibold mb-[2px]">Title</span>
              <input
                type="text"
                className="border-2 h-8 text-sm px-2 outline-none"
                placeholder="Write a title..."
              />
            </div>

            <div className="flex flex-col text-sm mt-4 ">
              <span className="font-semibold mb-[2px]">Description</span>
              <textarea
                className="border-2 h-8 text-sm px-1 outline-none"
                placeholder="Write a description..."
              />
            </div>

            <div className="flex flex-col text-sm mt-4 ">
              <span className="font-semibold mb-[2px]">Select Category</span>
              <select
                className="border-2 h-8 text-sm px-1 outline-none"
                placeholder="Write a description..."
              >
                <option value="1">Choose a category</option>
                <option value="2">Category 1</option>
                <option value="3">Category 2</option>
                <option value="4">Category 3</option>
              </select>
            </div>

            <div className="flex flex-col text-sm mt-4 ">
              <span className="font-semibold mb-[2px]">Prices</span>
              <div className="flex justify-between ">
                <input
                  type="number"
                  className="border-b-2 p-1 pl-0 pb-0 text-sm px-1 outline-none"
                  placeholder="small"
                />
                <input
                  type="number"
                  className="border-b-2 p-1 pl-0 pb-0 text-sm px-1 outline-none"
                  placeholder="medium"
                />
                <input
                  type="number"
                  className="border-b-2 p-1 pl-0 pb-0 text-sm px-1 outline-none"
                  placeholder="large"
                />
              </div>
            </div>

            <div className="flex flex-col text-sm mt-4 w-full">
              <span className="font-semibold mb-[2px]">Extra</span>
              <div className="flex gap-4">
                <input
                  type="text"
                  className="border-b-2 p-1 pl-0 pb-0 text-sm px-1 outline-none"
                  placeholder="item"
                />
                <input
                  type="number"
                  className="border-b-2 p-1 pl-0 pb-0 text-sm px-1 outline-none"
                  placeholder="price"
                />
                <button className="btn-primary !rounded-none ml-auto">
                  Add
                </button>
              </div>
              <div className="mt-2">
                <span className="inline-block border border-orange-300 text-orange-500 p-1 text-xs">
                  ketchup
                </span>
              </div>
            </div>
            <div className="text-center mt-12">
              <button className="btn-primary justify-centers  !bg-success ml-auto">
                Create
              </button>
            </div>
            <button
              className="absolute  top-4 right-4"
              onClick={() => setIsProductModal(false)}
            >
              <GiCancel size={25} className=" transition-all" />
            </button>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};
export default AddProduct;
