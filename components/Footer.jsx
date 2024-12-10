import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 pt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">Glow Up Electrical</h1>
            <div className="ml-4">
              <p className="text-sm">Contact: 09017991116</p>
              <p className="text-sm">Email: slywie8@gmail.com</p>
              <p className="text-sm">Address: 66 Falolu Road, Surulere, Lagos</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <Image
              src="/images/section/Line 6.png"
              alt="line"
              width={30}
              height={4}
              className="md:w-48"
            />
            <p className="text-sm">© 2024 Glow Up Electrical. All Rights Reserved.</p>
            <Image
              src="/images/section/Line 6.png"
              alt="line"
              width={30}
              height={4}
              className="md:w-48"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;