"use client"
import Image from "next/image";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0"}} transition={{duration: 1}}> 
     <div className="h-full flex flex-col md:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:48">
      {/*Image Container*/}
      <div className="h-1/2 relative md:h-full md:w-2/4 md:flex justify-center">
      <Image src="/hero.png" alt=""  width={500} height={500} />
      </div>
      {/*Text Container*/}
      <div className="h-1/ flex flex-col gap-8 items-center justify-center md:w-2/4 mt-5 mt:mb-0">
      {/*Title*/}
        <h1 className="text-4xl md:text-6xl font-bold">Carfting Digital Experiances, Designing Tommorrow.</h1>
      {/*Description*/}
        <div  className="text-xl">Welcome to my digital canvas, where innovation and creativity converge. with a keen eye for aesthetics and a mastery off code, my portfolio showcase a drivers collection of projects that reflect my commitment to excellence. </div>
      {/*Buttons*/}
        <div className="flex gap-4">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View my work</button>
          <button className="p-4 rounded-lg ring-1 ring-black text-black">Contact me</button>
        </div>
      </div>
     </div>
     </motion.div>
  );
}
