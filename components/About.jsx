'use client'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

  export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <section id="about">
      <div className="grid md:grid-cols-2 maxWidth">
        <div
          className="bg-black flex items-center justify-center padding-x"
          data-aos="fade-in"
        >
          <p className="padding-y lg:text-xl text-white font-normal tracking-wide text-center max-w-[430px]">
            At Glow up, we specialize in delivering top-notch electrical sales
            and installation services tailored to meet your unique needs.
            Whether you&apos;re outfitting your home, upgrading your business
            infrastructure, or tackling a large-scale project, our team of
            experienced professionals is here to ensure quality, safety, and
            reliability.
          </p>
        </div>

        <div
          className="flex justify-center padding-x items-center"
          data-aos="zoom-in"
        >
          <img
            src="/images/about/product-1.png"
            alt="chandelier"
            width={458}
            height={658}
            className="md:w-[458px] lg:h-[658px] md:h-[500px] h-[350px] w-[250px]"
          />
        </div>

        <div
          className="order-4 md:order-3 flex items-center padding-x justify-center"
          data-aos="zoom-in"
        >
          <img
            src="/images/about/product-2.png"
            alt="lightings"
            width={572}
            height={572}
          />
        </div>

        <div
          className="order-3 md:order-4 bg-black padding-x flex justify-center items-center"
          data-aos="fade-in"
        >
          <p className="padding-y lg:text-xl text-white font-normal tracking-wide text-center max-w-[430px]">
            We provide a wide range of high-quality electrical products and
            services, including cutting-edge installations, routine maintenance,
            and expert consultations. Our commitment to excellence, timely
            delivery, and competitive pricing has made us a trusted partner for
            clients in both residential and commercial sectors.
          </p>
        </div>

        <div
          className="order-5 bg-black padding-x flex justify-center items-center"
          data-aos="fade-in"
        >
          <p className="padding-y lg:text-xl text-white font-normal tracking-wide text-center max-w-[430px]">
            Discover the difference of working with a team that prioritizes your
            satisfaction and ensures your electrical systems are built to last.
            Let&apos;s power your future together!
          </p>
        </div>

        <div
          className="order-6 padding-x md:flex hidden justify-center items-center"
          data-aos="zoom-in"
        >
          <img
            src="/images/about/product-3.png"
            alt="freezer"
            width={406}
            height={690}
          />
        </div>
      </div>
    </section>
  );
}
