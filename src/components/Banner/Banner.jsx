import React from "react";

export default function Banner() {
  return (
    <>
      <div className="hero min-h-[50vh] md:min-h-[80vh] bg-[url('/images/banner.png')] bg-no-repeat bg-center bg-cover object-cover rounded-2xl mt-4">
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-4xl">
            <h1 className="mb-6 text-5xl font-bold text-white">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mb-6 text-white text-lg">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding problems to become an
              exceptionally well world-class Programmer.
            </p>
            <div className="space-x-4">
              <button className="bg-[#0BE58A] p-4 rounded-full text-[#150B2B] font-semibold text-xl">
                Explore Now
              </button>
              <button className="p-4 rounded-full border  text-white font-semibold text-xl">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
