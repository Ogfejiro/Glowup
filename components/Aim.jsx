import React from "react";

const Aim = () => {
  return (
    <div>
      <div className="text-center pt-12 pb-12 maxWidth">
        <h1 className="pb-4 font-bold text-xl" data-aos="fade-left">
          Aim
        </h1>
        <p className="padding-x" data-aos="fade-right">
          To deliver innovative, reliable, and sustainable electrical solutions
          that exceed customer expectations, ensuring safety, efficiency, and
          long-term value in every project.
        </p>
        <h2 className="pt-12 font-bold">Objectives</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-6 pt-10 padding-x">
          <div
            className="bg-gradient-to-r from-gray-500 to-gray-900 py-8 px-4 rounded-lg shadow-md"
            data-aos="fade-left"
          >
            <div className="text-gray-100 text-center">
              <p className="font-bold text-xl pb-3">Customer Satisfaction</p>
              <p className="pt-3">
                Provide high-quality products and professional services to meet
                and exceed customer needs.
              </p>
            </div>
          </div>
          <div
            className="bg-gradient-to-r from-gray-500 to-gray-900 py-8 px-4 rounded-lg shadow-md"
            data-aos="fade-right"
          >
            <div className="text-gray-100 text-center">
              <p className="font-bold text-xl pb-3">Safety Compliance</p>
              <p className="pt-3">
                Adhere to the highest safety standards in all installations and
                maintenance services.
              </p>
            </div>
          </div>
          <div
            className="bg-gradient-to-r from-gray-500 to-gray-900 py-8 px-4 rounded-lg shadow-md"
            data-aos="fade-left"
          >
            <div className="text-gray-100 text-center">
              <p className="font-bold text-xl pb-3">Sustainability</p>
              <p className="pt-3">
                Promote energy-efficient and eco-friendly solutions to minimize
                environmental impact.
              </p>
            </div>
          </div>
          <div
            className="bg-gradient-to-r from-gray-500 to-gray-900 py-8 px-4 rounded-lg shadow-md"
            data-aos="fade-right"
          >
            <div className="text-gray-100 text-center">
              <p className="font-bold text-xl pb-3">Innovative</p>
              <p className="pt-3">
                Stay updated with the latest technologies to offer cutting-edge
                electrical solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="padding-x pt-10">
          <p className="padding-x">
            By staying true to these aims and objectives, we strive to be a
            leader in the electrical industry, delivering exceptional value to
            our clients and contributing positively to the community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aim;
