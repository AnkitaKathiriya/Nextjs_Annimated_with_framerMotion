"use client";
import React, { useState } from "react";
import { delay, motion } from "framer-motion";
export default function Contact() {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const text = "Say Hello";
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 l:lg-48 flex items-center justify-center ">
        {/* Text Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 text-6xl">
          <div>
            {text.split("").map((item, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {item}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* Form Container */}
        <form className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24">
        <span>
          Dear Creative Designer,
          <textarea rows={6} className="bg-transparent border-b-2 outline-none resize-none"></textarea><br/>
          <span>My mail address is:</span><br/>
          <input type="text" className="bg-transparent border-b-2 outline-none"/><br/>
          <span>Regards</span><br/>
          <button onClick={()=>setSuccess(!success)} className="bg-purple-200 rounded font-semibold text-gray-600 p-4">Send</button>
          {success && <span className="text-green-600 font-semibold">Your message has been sent successfully</span>}
          {error && <span className="text-red-600 font-semibold">something went wrong</span>}
        </span>
        </form>
      </div>
    </motion.div>
  );
}
