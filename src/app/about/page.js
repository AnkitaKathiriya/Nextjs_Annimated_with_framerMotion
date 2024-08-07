"use client"
import React from 'react'
import { motion } from "framer-motion"
export default function About() {
  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0"}} transition={{duration: 1}}> 
      <h1>About page</h1>
    </motion.div>
  )
}
