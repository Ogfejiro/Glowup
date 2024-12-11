import React from 'react';
import Image from 'next/image';

const Contact = () => {
  return (
    <footer className="bg-black text-white py-4 pt-10">
      <div className="container mx-auto px-4"> {/* Wrap entire footer content */}
        <div className="flex justify-center mb-8"> {/* Center logo horizontally */}
        <div className="flex-shrink-0 text-white">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={227}
            height={38}
            className="md:w-[227px] md:h-[38px] h-[30px] w-[187px]"
          />
        </div>
        </div>

        <div className=" text-center leading-9 md:flex md:justify-center md:items-center gap-10"> {/* Flex on large screens */}
          <p>Contact: 09017991116</p>
          <p>Email: slywie8@gmail.com</p>
          <p>Address: 66 falolu road surulere, lagos</p>
        </div>


        <div className="mt-8">
          <div className="flex items-center gap-4 text-[rgba(255,255,255,.7)]">
            <div className="h-[.5px] grow bg-[rgba(255,255,255,.7)]" />
            <div className="text-center">
              &copy; 2024 Glow Up Electrical All Simple Right Reserved
            </div>
            <div className="h-[.5px] grow bg-[rgba(255,255,255,.7)]" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;