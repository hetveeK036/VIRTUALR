import codeImg from "../assets/code.jpg";
import { CheckCircle2 } from "lucide-react";
import { checklistItems } from "../Constant/constant";

const WorkFlow = () => {
  return (
    <div className="mt-20">
      <h2 className="text-center mb-4 text-3xl sm:text-5xl lg:text:7xl mt-6">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
          coding Workflow.
        </span>
      </h2>

      <div className="flex flex-wrap justify-center">
        <div className=" p-2 w-full lg:w-1/2">
          <img src={codeImg} alt="Code" />
        </div>
        <div className="w-full pt-12 lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="p-2 w-10 h-10 justify-center bg-neutral-900 text-green-400 items-center mt-1 rounded-full">
                <CheckCircle2 />
              </div>
              <div className="pl-6">
                <h5 className="mb-2 mt-1 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500 ">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
