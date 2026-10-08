'use client'
import React from 'react'
import {motion} from 'motion/react'

const Footer = () => {
  return (
    <motion.div
    className='relative z-10 text-center py-6 text-xs text-zinc-500 bg-black border-b border-white/10'>
    &copy;  {new Date().getFullYear()} Incognito | Anonymous Video/Voice chat
    </motion.div>
  )
}

export default Footer
