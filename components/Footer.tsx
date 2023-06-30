import React from 'react'
import Link from 'next/link'

import {
  BsTwitter,
  BsFacebook,
  BsInstagram
} from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      <div className="py-10 text-xs text-center px-4">
        <div className="flex justify-between items-center">
          <Link href="mailto:">
            Get In Touch
          </Link>
        </div>
        <p className="pt-6"> &copy; 2023 Sarah Toney. All Rights Reserved.</p>
      </div>
    </>
  )
}

export default Footer