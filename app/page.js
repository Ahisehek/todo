"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [first, setfirst] = useState("");
  const [second, setsecond] = useState("");
  const [main, setmain] = useState([]);

  // const handlechange=(e)=>{
  //   setfirst(e.target.value)
  //   setsecond(e.target.value)

  // }

  const submit = (e) => {
    e.preventDefault();
    setmain([...main, { first, second }]);
    console.log(main);

    setfirst("");
    setsecond("");
  };
  const deletehandler = (index) => {
    let copytask = [...main];
    copytask.splice(index, 1);
    setmain(copytask);
  };
  let rendertask = (
    <h1 className="text-center font-bold text-zinc-600">No Task available</h1>
  );
  if (main.length > 0) {
    rendertask = main.map((item, index) => {
      return (
        <div
          key={index}
          className="border-black  border flex rounded-lg justify-between font-bold text-black  w-[50%] m-auto px-4 h-12 text-lg"
        >
          <h1>{item.first} :-</h1>

          <h1>{item.second}</h1>
          <div className="pt-2">
            <button
              className="bg-black rounded-lg text-white w-20"
              onClick={() => {
                {
                  deletehandler(index);
                }
              }}
            >
              delete
            </button>
          </div>
        </div>
      );
    });
  }

  return (
    <>
      <div className="">
        <div className="">
          <div className="h-12 w-full bg-black text-white  px-8 pt-3 font-bold">
            Abhishek's Todo
          </div>
          <div className="font-bold text-center w-full  pt-4 text-[2rem]">
            Let's set your day
          </div>
          <div className="w-96 ml-[620px] mt-10">
            <form className="flex flex-col gap-4">
              <input
                className="border-2 border-black outline-none h-10 rounded-lg p-2"
                value={first}
                onChange={(e) => {
                  setfirst(e.target.value);
                }}
                placeholder="enter the title"
                type="text"
              />
              <input
                className="border-2 border-black outline-none h-10 rounded-lg pl-2"
                value={second}
                onChange={(e) => {
                  setsecond(e.target.value);
                }}
                placeholder="enter the description"
                type="text"
              />
              <button
                className="h-10 bg-black text-white rounded-lg w-20 m-auto"
                onClick={submit}
              >
                save
              </button>
            </form>
          </div>
        </div>

        <div className=" mt-4 border">
          <ul>{rendertask}</ul>
        </div>
      </div>
    </>
  );
}
