import React from 'react'
import { FaSquareFacebook, FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-blue-100'>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image src={require('../../../public/assets/myPic/logo.png')} alt="Noor"
              className='w-[50px]' width={100} height={100} />
            <span className="ml-3 text-xl">NoorAhmed</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 NoorAhmed —
            <a
              href="https://twitter.com/knyttneve"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @knyttneve
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="ml-3 text-gray-500">
              <Link href={'https://www.facebook.com/chrmingNoorAhmed'}
                target='blank'
                className='text-gray-500'>
                <FaSquareFacebook className='text-3xl hover:text-blue-900' />
              </Link>

            </a>
            <a className="ml-3 text-gray-500">
              <Link href={'https://www.linkedin.com/in/noor-ahmed-2980b122a/'}
                target='blank'
                className='text-gray-500'>
                <FaLinkedin className='text-3xl hover:text-blue-500' />
              </Link>

            </a>


            <a className="ml-3 text-gray-500">
              <Link href={'https://github.com/NoorAhmed786'}
                target='blank'
                className='text-gray-500'>
                <FaGithubSquare className='text-3xl hover:text-gray-950' />
              </Link>

            </a>

            <a className="ml-3 text-gray-500">
              <Link href={'https://www.facebook.com/chrmingNoorAhmed'}
                target='blank'
                className='text-gray-500'>
                <FaInstagramSquare className='text-3xl hover:text-pink-600' />
              </Link>

            </a>


          </span>
        </div>
      </footer>

    </div>


  )
}

export default Footer