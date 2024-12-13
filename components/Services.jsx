import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <section
      className="bg-hero-pattern bg-cover bg-center bg-fixed padding-x"
      id="services"
    >
      <div className="text-center text-white maxWidth">
        <h1 className="pt-10 pb-10 text-2xl" data-aos="zoom-in">
          Services
        </h1>
        <p className="" data-aos="fade-in">
          We offer services tailored to meet your unique needs. Whether you are
          outfitting your home, house wiring needs, both surface and conduit,
          upgrading your business infrastructure, or tackling a large-scale
          project, our team of experienced professionals is here to ensure
          quality, safety, and reliability.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center pt-10 pb-10">
  <div className="flex-1 padding-x sm:w-full" data-aos="flip-left">
    <img className="rounded-xl w-full md:w-96 object-cover" src="/images/section/man.png" />
    <p data-aos="fade-up">Electrical Installation</p>
  </div>
  <div className="flex-1 padding-x sm:w-full" data-aos="flip-right">
    <img className="rounded-xl w-full md:w-96 object-cover" src="/images/section/wire (1).png" />
    <p data-aos="fade-up">Custom Solutions</p>
  </div>
  <div className="flex-1 padding-x sm:w-full" data-aos="flip-up">
    <img className="rounded-xl w-full md:w-96 object-cover" src="/images/section/fix.png" />
    <p data-aos="fade-up">Maintenance and Repairs</p>
  </div>
</div>
      </div>
    </section>
  );
};

export default Services;
