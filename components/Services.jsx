import React from 'react';
import Image from 'next/image';

const Services = () => {
  return (
    <section className="bg-hero-pattern bg-cover bg-center bg-fixed opacity-80" id="services">
      <div className="text-center text-white">
        <h1 className="pt-10 pb-10 text-2xl" data-aos="zoom-in">Services</h1>
        <p className="padding-x" data-aos="fade-in">We offer services tailored to meet your unique needs. Whether you are outfitting your home, house wiring needs, both surface and conduit, upgrading your business infrastructure, or tackling a large-scale project, our team of experienced professionals is here to ensure quality, safety, and reliability.</p>
        <div className="flex flex-col md:flex-row justify-center items-center pt-10 pb-10">
          <div className="padding-x  sm:w-full" data-aos="flip-left">
            <Image
              src="/images/section/fix.png"
              alt="Man Image"
              width={300}
              height={150}
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg"
            />
          </div>
          <div className="padding-x  sm:w-full" data-aos="flip-right">
            <Image
              className="rounded-lg"
              src="/images/section/wire (1).png"
              alt="Man Image"
              width={300}
              height={150}
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="padding-x  sm:w-full" data-aos="flip-up">
            <Image
              src="/images/section/man.png"
              alt="Man Image"
              width={350}
              height={150}
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;