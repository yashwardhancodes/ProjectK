import React from "react";

const AboutUs = () => {
  return (
    <div className="py-5 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Image Section */}
          <div className="relative min-h-[400px]">
            <img
              src="src/assets/about.jpg"
              alt="About Us"
              className="absolute w-full h-full object-cover"
            />
            <div className="absolute top-0 right-0 mt-[-20px] mr-[-20px] py-4 px-5 bg-black bg-opacity-20">
              <h1 className="text-white text-4xl lg:text-5xl mb-0">
                15 <span className="text-xl">Years</span>
              </h1>
              <h4 className="text-white">Experience</h4>
            </div>
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-center">
            <h6 className="text-blue-500 uppercase">// About Us //</h6>
            <h1 className="text-3xl lg:text-4xl mb-4">
              <span className="text-blue-500">CarServ</span> Is The Best Place
              For Your Auto Care
            </h1>
            <p className="mb-4 text-gray-600">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
              Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed
              stet lorem sit clita duo justo magna dolore erat amet.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <div className="bg-gray-200 flex-shrink-0 flex items-center justify-center w-10 h-10">
                  <span className="font-bold text-gray-600">01</span>
                </div>
                <div className="pl-4">
                  <h6 className="font-semibold">Professional & Expert</h6>
                  <span className="text-gray-600">
                    Diam dolor diam ipsum sit amet diam et eos
                  </span>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-gray-200 flex-shrink-0 flex items-center justify-center w-10 h-10">
                  <span className="font-bold text-gray-600">02</span>
                </div>
                <div className="pl-4">
                  <h6 className="font-semibold">Quality Servicing Center</h6>
                  <span className="text-gray-600">
                    Diam dolor diam ipsum sit amet diam et eos
                  </span>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-gray-200 flex-shrink-0 flex items-center justify-center w-10 h-10">
                  <span className="font-bold text-gray-600">03</span>
                </div>
                <div className="pl-4">
                  <h6 className="font-semibold">Award-Winning Workers</h6>
                  <span className="text-gray-600">
                    Diam dolor diam ipsum sit amet diam et eos
                  </span>
                </div>
              </div>
            </div>

            {/* Read More Button */}
            <a
              href="#"
              className="inline-block py-3 px-5 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
            >
              Read More <i className="fas fa-arrow-right ml-3"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
