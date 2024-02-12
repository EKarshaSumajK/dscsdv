

// import React from 'react';
// import { CustomButton } from '..';
// import Link from 'next/link';

// const Navbar = () => {


//   return (
//     <>
//       <div className="flex justify-between items-center bg-gray-800 p-4 text-white">
//       <div className="logo flex items-center px-2 lines space-x-0">
//         <img src="/download.jpeg" alt="Logo" className="max-h-10 " />
//         <h1>Certificate<br/>Generator</h1>
//       </div>
//       <div className='flex items-center px-2 lines space-x-0'>

//       </div>

//       <div className="links space-x-20">
//         <a href="#" className="hover:underline">Home</a>
//         <a href="#" className="hover:underline mx-15">About</a>
//         <a href="#" className="hover:underline mx-8">Content</a>
//       </div>

//     </div>
//      <div>
//      <Link href={'/form'}><CustomButton label="Get Started" /></Link>
//      </div>

//     </>)}
//   //   <>
//   //     {/* <div className='navbar'>
//   //       <div className='logo'>
//   //         <img src="/download.jpeg"  alt="Logo" />
//   //         <div className="header">
//   //           <p>Certificate<br/>Generator</p>
//   //         </div>
//   //       </div>
//   //       <div className='links}'>
//   //         <a href="#">Link 1</a>
//   //         <a href="#">Link 2</a>
//   //         <a href="#">Link 3</a>
//   //       </div>
//   //     </div>
//   //   </>
//   // ); */}


// export default Navbar;
import Image from 'next/image'
import React from 'react';
import Link from 'next/link';
import { CustomButton } from '..';
import './Navbar.css'
const Navbar = () => {


  return (
    <>
      <header className="text-gray-400 bg-black body-font bg-transparent">
        <div className="container mx-auto flex flex-wrap p-16 flex-col md:flex-row items-center bg-transparent">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <Image width={50} height={50} src="/download.jpeg" alt="" />
            <span className="ml-3 text-xl">Cerficate Generator</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="ml-10 hover:text-white">Home</a>
            <a className="ml-10 hover:text-white">About</a>
            <a className="ml-10 hover:text-white">Contact</a>
          </nav>
        </div>
      </header>
      <div className="text-8xl font-bold flex flex-col justify-center items-center mt-40 text-white bg-transparent">
        <h1>
          Certificate
        </h1>
        <h1 className=" font-bold ml-96 indent-8">
          Generator
        </h1>
      </div>
      <footer>
        <div className='name bg-transparent' >
          <Link href={'/form'}><CustomButton label="Get Started" buttonStyles="fixed bottom-10 right-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded m-4 " textStyle='flex-1 text-white text-[14px] leading-[17px] font-bold'/></Link>
        </div>
      </footer>
    </>
  );
};

export default Navbar;
