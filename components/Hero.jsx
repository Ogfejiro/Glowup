import { heroProducts } from "@/data/hero";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="padding-x bg-[#F0F0F0] py-12">
      <div className="grid md:grid-cols-2 gap-12 maxWidth">
        <div
          className="flex flex-col justify-center md:gap-24 gap-16"
          data-aos="fade-right"
        >
          <h1 className="xl:text-6xl lg:text-4xl text-3xl md:text-start text-center font-extrabold">
            Your World of Top Quality Electrical Products and Services
          </h1>

          <div className="grid grid-cols-3 lg:gap-6 gap-3">
            {heroProducts.map((product) => (
              <Product
                key={product.text}
                img={product.img}
                text={product.text}
              />
            ))}
          </div>
        </div>

        <div className="hidden md:flex justify-center" data-aos="zoom-in">
          <Image src="/images/hero.png" alt="hero" width={505} height={472} />
        </div>
      </div>
    </section>
  );
}

const Product = ({ img, text }) => {
  return (
    <div className="bg-white rounded-lg pb-4 flex flex-col justify-between items-center">
      <Image
        src={img}
        alt={text}
        width={132}
        height={132}
        className="lg:-mt-[67.5px] -mt-[40px] mx-auto"
      />
      <p className="text-center text-black text-sm">{text}</p>
    </div>
  );
};
