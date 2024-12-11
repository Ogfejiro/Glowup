import React from 'react'
import Image from 'next/image';

const Services = () => {
  return (
    <section className="bg-hero-pattern bg-cover bg-center bg-fixed opacity-80" >
         <div className='text-center text-white'>
            <h1 className='pt-10 pb-10 text-2xl' data-aos="zoom-in">Services</h1>
            <p className='padding-x' data-aos="fade-in">We offer services tailored to meet your unique needs. Whether you're outfitting your home, upgrading your business infrastructure, or tackling a large-scale project, our team of experienced professionals is here to ensure quality, safety, and reliability.</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 pt-10 pb-10">
  <div className="padding-x" data-aos="flip-left">
    <Image src="/images/section/solar.png" alt="Man Image" width={300} height={150} />
    
  </div>
  <div className="padding-x" data-aos="flip-right">
    <Image src="/images/section/peps.png" alt="Man Image" width={300} height={150} />

  </div>
  <div className="padding-x" data-aos="flip-up">
    <Image src="/images/section/man.png" alt="Man Image" width={300} height={150} />
    
  </div>
</div>
         </div>
    </section>
  );
};

export default Services;