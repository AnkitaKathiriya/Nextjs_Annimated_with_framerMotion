"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { motion, stagger } from "framer-motion";
const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const topVariant = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  };
  const centerVariant = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariant = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  };
  const linkVariant = {
    closed:{
      x:"100vh",
    },
    opened:{
      x:0,
      transition: {
        when : "beforeChildren",
        staggerChildren: 0.3 // this will set the time inbetween children animation
      }
    }
  };
  const listItem = {
    closed:{
      x: -10,
      opacity:0
    },
    opened: {
      x:0,
      opacity:1
    }
  }
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:48 text-lg">
      {/*Links*/}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title}></NavLink>
        ))}
      </div>
      {/* logo */}
      <div className="md:hidden lg:flex xl:justify-center xl:w-1/3">
        <Link
          href="/"
          className="text-sm bg-black text-white rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Creative</span>
          <span className="w-14 h-8 rounded bg-white text-black flex items-center justify-center px-1">
            design
          </span>
        </Link>
      </div>
      {/*Social*/}
      <div className="hidden md:flex gap-4 items-center justify-center w-1/3">
        <Link href="/#">
          <Image src="/github.svg" alt="github" width={34} height={34} />
        </Link>
        <Link href="/#">
          <Image src="/facebook.svg" alt="facebook" width={24} height={24} />
        </Link>
        <Link href="/#">
          <Image src="/instagram.svg" alt="instagram" width={24} height={24} />
        </Link>
        <Link href="/#">
          <Image src="/linkdin.png" alt="linkdin" width={24} height={24} />
        </Link>
      </div>
      {/*Responsiv Menu*/}
      <div className="md:hidden">
        {/* MeNu Button*/}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topVariant}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariant}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariant}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/*Menu List*/}
        {open && (
          <motion.div variants={linkVariant} initial="closed" animate="opened" className="absolute top-0 left-0 w-screen h-screen text-white bg-black flex flex-col items-center justify-center gap-8 text-4xl z-40">
            {links.map((link) => (
              <motion.div key={link.title} variants={listItem}>
              <Link href={link.url}>
                {link.title}
              </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
