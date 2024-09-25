export default function Banner() {
  return (
    <>
      <div className="hero min-h-[50vh] md:min-h-[70vh] lg:min-h-[85vh] bg-[url('/images/banner.png')] bg-no-repeat bg-center bg-cover object-cover rounded-2xl mt-4">
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-4xl">
            <h1 className="mb-6 text-4xl md:text-5xl font-bold text-white">
              Welcome to Food Fiesta – A Celebration of Flavor!
            </h1>
            <p className="mb-6 text-white md:text-lg">
              Food Fiesta brings you a variety of delicious recipes from around
              the world. Whether you're looking for quick meals or gourmet
              dishes, we have something to satisfy every craving. Let's cook up
              something amazing together!
            </p>
            <div className="space-x-4">
              <button className="bg-[#0BE58A] p-3 md:p-4 rounded-full text-[#150B2B] font-semibold md:text-xl">
                Explore Now
              </button>
              <button className="p-3 md:p-4 rounded-full border  text-white font-semibold md:text-xl">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
