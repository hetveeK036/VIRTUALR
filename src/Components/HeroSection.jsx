import video1 from "../assets/videoCode.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-4 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide ">
        VirtualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
          {" "}
          for developers
        </span>
      </h1>
      <p className="text-lg mt-10 text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="py-3 px-3 mx-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
        >
          {" "}
          Start for Free{" "}
        </a>
        <a href="#" className="py-3 px-3 mx-3 rounded-md border ">
          {" "}
          Documentation{" "}
        </a>
      </div>
      <div className="flex justify-center mt-10 w-full  ">
        <video
          loop
          muted
          autoPlay
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag
        </video>
        <video
          loop
          muted
          autoPlay
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Y0ur browser does not support the video tag
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
