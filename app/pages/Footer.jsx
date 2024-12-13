// "use client"
import Image from 'next/image';
import React from 'react';
import footimg from '../../public/footer.png';
import { FaGithub, FaInstagram, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="relative z-0 bg-gray-800 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image 
          src={footimg} 
          alt="Footer background" 
          layout="fill" 
          objectFit="cover" 
          quality={100} 
          className="opacity-50" 
        />
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-300">
              We are dedicated to providing the best service to our customers. Our mission is to make your life easier and more enjoyable.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li><a href="#" className="hover:text-white">Website development</a></li>
              <li><a href="#" className="hover:text-white">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-white">App development</a></li>
              <li><a href="#" className="hover:text-white">Testing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-300">123 Street, City, State</p>
            <p className="text-sm text-gray-300">Email: contact@example.com</p>
            <p className="text-sm text-gray-300">Phone: (123) 456-7890</p>
          </div>
          <div className='flex flex-row gap-5'>
            <FaInstagram size={26} />
            <FaLinkedin size={26}/>
            <IoMdMail size={28}/>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
