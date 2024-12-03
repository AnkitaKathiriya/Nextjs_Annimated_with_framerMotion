"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Coin from "./../../../public/agunium-image.png";
import Benk from "./../../../public/benk.jpeg";
import Ag from "./../../../public/ag.jpeg";
import Visionx from "./../../../public/visionx.png";
import Link from "next/link";
import Image from "next/image";
const SiteData = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "React coin currency",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    img: Coin,
    link: "https://unidef.org",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "React benk",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    img: Benk,
    link: "https://benk.com",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "React visionx foundation",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    img: Visionx,
    link: "https://visionx.foundation",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "web Ag ",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    img: Ag,
    link: "https://weare.ag",
  },
];
export default function Portfolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0", "-80%"]);
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl">
          My Work
        </div>
        <div className="sticky top-0 h-screen gap-4 items-center">
          <motion.div style={{ x: x }} className="flex w-fit">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {SiteData.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-6 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl ">{item.title}</h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" className="object-cover" fill />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-xl xl:w-[600px] ">{item.des}</p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 md:p-4 md:text-md lg:text-lg bg-white text-gray-600
                  font-semibold m-2 rounded">see Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-6xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg animate={{rotate:360}} transition={{duration:8, ease:"linear", repeat:Infinity}} viewBox="0 0 300 300" className="w-64 h-54 md:w-[500px] md:h-[500px]">
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0"
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">Front-end devloper and UI designer</textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
