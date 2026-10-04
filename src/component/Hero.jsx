"use client";
import { useState } from "react";

export default function Hero() {
  const [message, setMessage] = useState("");

  const HandleMessage = (e) => {
    if (message.trim() === "") {
      console.log("Enter message ");
    } else {
      setMessage("");
      console.log(message);
    }
  };
  return (
<section className="relative min-h-screen overflow-hidden">
   
      <div className="absolute inset-0 overflow-hidden" />


      <div className="relative z-10 flex flex-col items-center px-5 pt-36">
        <h1 className="text-center text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
          Build something Lovable
        </h1>

        <p className="mt-3 text-center text-base text-gray-600 md:text-lg">
          Bring a new product, internal tool, or entire company to life.
        </p>


        <div className="relative mt-9 h-36 w-full max-w-xl rounded-3xl border border-gray-200 bg-white p-5 shadow-lg">
          <textarea
            placeholder="Ask Lovable to create a prototype..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="h-16 w-full resize-none bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-500"
          />

          <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
        
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-xl text-gray-500 transition hover:bg-gray-100 hover:text-black"
            >
              +
            </button>

           
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="rounded-full border border-black px-4 py-2 text-sm text-gray-500 transition hover:text-black"
              >
                Build
              </button>
              
              <button
                type="button"
                onClick={HandleMessage}
                className="rounded-full bg-black px-4 py-2 text-sm text-white transition hover:bg-gray-800"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
