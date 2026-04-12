import React from "react";
import Heroimg from "../assets/pngwing 1.png";

const Banner = () => {
  return (
    <section className="bg-white border-b border-gray-200 py-12 sm:py-14 lg:py-16">
      <div className="w-11/12 mx-auto lg:px-24">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 sm:gap-10">
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block text-xs font-medium text-gray-500 bg-gray-100 rounded-full px-3 py-1 mb-4 sm:mb-5">
              Your reading companion
            </span>

            <h1 className="text-2xl sm:text-3xl md:text-[40px] font-medium text-gray-900 leading-tight tracking-tight mb-3 sm:mb-4">
              Books to freshen up <br />
              <span className="text-gray-400">your bookshelf</span>
            </h1>

            <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed max-w-sm mx-auto lg:mx-0 mb-6 sm:mb-8">
              Discover your next favorite read and organize your collection with
              ease.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
              <button className="w-full sm:w-auto bg-gray-900 hover:bg-gray-700 text-white text-sm font-medium px-5 py-2.5 rounded-sm transition-colors">
                View the list
              </button>
              <button className="w-full sm:w-auto border border-gray-200 hover:bg-gray-50 text-gray-700 text-sm font-medium px-5 py-2.5 transition-colors">
                Learn more
              </button>
            </div>
          </div>

          <div className="flex-shrink-0 w-full max-w-[260px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[400px] h-[260px] sm:h-[320px] md:h-[360px] lg:h-[390px] rounded-2xl flex items-center justify-center overflow-hidden">
            <img src={Heroimg} className="w-4/5 object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
