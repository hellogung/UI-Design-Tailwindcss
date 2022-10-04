import hero from "../img/hero.png";
import { ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";

const Hero = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 my-5 md:my-12">
        <img src={hero} alt="hero-image" className="w-10/12 mx-auto md:mx-0" />
        <div className="space-y-10">
          <h2 className="text-6xl md:text-8xl font-medium hover:tracking-wider transition-all duration-300">
            The power to scale faster
          </h2>
          <p className="font-medium w-full md:max-w-md">
            Accelerate your growth with our embedded recruitment solution. We
            equip high-growth companies with the people and strategy needed to
            recruit top talent at scale.
          </p>
          <div className="flex gap-5 font-medium justify-center md:justify-start">
            <a
              href="#"
              className="px-10 py-3 bg-black text-white hover:shadow-xl transition-shadow duration-300"
            >
              Go canvas <ArrowUpRightIcon className="w-4 h-4 ml-3 inline" />{" "}
            </a>
            <a
              href="#"
              className="px-8 py-3 border border-transparent hover:border-black hover:shadow-xl transition-all duration-300"
            >
              Explore canvas <ArrowRightIcon className="inline w-4 h-4 ml-3" />
            </a>
          </div>
          <div className="grid grid-cols-3 place-content-center pt-10 ">
            <div className="flex flex-col font-semibold space-y-4">
              <span className="text-4xl">30%</span>
              <span className="text-xl">
                More
                <br />
                efficient
              </span>
            </div>
            <div className="flex flex-col font-semibold space-y-4">
              <span className="text-4xl">48%</span>
              <span className="text-xl">
                Cost
                <br />
                savings
              </span>
            </div>
            <div className="flex flex-col font-semibold space-y-4">
              <span className="text-4xl">92%</span>
              <span className="text-xl">
                Client
                <br />
                satisfaction
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
