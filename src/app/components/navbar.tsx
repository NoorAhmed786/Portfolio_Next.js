import Link from 'next/link'
import Image from 'next/image';
import { LuDownloadCloud } from "react-icons/lu";
import react from 'react'

const Navbar = () => {
    return (
        <div className='bg-blue-100 z-50 sticky top-0'>
           <header className="text-gray-600 body-font ">
                <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center ">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <Image src={require('../../../public/assets/myPic/logo.png')}alt="Noor"
                        className='w-[50px]'  width={100} height={100}/>
                        <span className="ml-3 text-xl">NoorAhmed</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link href={'/'} className="mr-5 hover:text-cyan-800">HOME</Link>
                        <Link href={'#about'}className="mr-5 hover:text-cyan-800">ABOUT</Link>
                        <Link href={'#skill'} className="mr-5 hover:text-cyan-800">SKILLS</Link>
                        <Link href={'#project'} className="mr-5 hover:text-cyan-800">PROJECTS</Link>
                        <Link href={'#contact'} className="mr-5 hover:text-cyan-800">CONTACT</Link>
                    </nav>
                      <a href="/assets/cv/Noorulain.pdf">
                    <button className="inline-flex items-center bg-cyan-950 border-0 py-1 px-3 focus:outline-none hover:bg-cyan-900 rounded  text-white text-base mt-4 md:mt-0" >Download Cv
                      <LuDownloadCloud className='text-xl ml-2'/>
                    </button>
                      </a>
                </div>
            </header>
        </div>
            
        
    )
}

export default Navbar