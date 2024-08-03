import { testimonials } from "../Constant/constant";

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-10 ">
        What people are saying
      </h2>
      <hr className="w-32 h-0.5 border-0 mx-auto my-6 bg-gradient-to-r from-orange-500 to-red-400 rounded-full" />
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="  w-full lg:w-1/3 sm:w-1/2 px-2 py-2  ">
            <div className="bg-neutral rounded-md p-6 text-md h-80  border border-neutral-800 font-thin">
              <p className="text-justify">{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <div className=" object-cover">
                  <img
                    src={testimonial.image}
                    alt={testimonial.user}
                    className="w-12 h-12 mr-6 border border-neutral-300 rounded-full"
                  />
                </div>
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;


