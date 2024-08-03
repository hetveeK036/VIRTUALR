
import { features } from '../Constant/constant'

const FeatureSection = () => {

  return (
    <div className="relative border-b mt-20 border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="rounded-full text-orange-500 bg-neutral-900 uppercase h-6 text-sm font-medium px-2 py-1">
          Feature
        </span>
        
        <h2 className="text-3xl sm:text-5xl lg:text-7xl mt-10 lg:mt-20 tracking-wide">
          Easily build 
           <span className="bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
            {" "}your Code</span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
            <div  key= {index} className="w-full lg:w-1/3 sm:1/2">
              <div className="flex">
                <div className="flex w-10 h-10 mx-6 p-2 text-orange-700 bg-neutral-900 justify-center items-center rounded-full">
                  {feature.icon}
                </div>
                <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="p-2 mb-20 text-md text-neutral-500 text-justify">
                  {feature.description}
                </p>
                </div>
              </div>
            </div>
        ))
        }
      </div>
  
    </div>
  )
}

export default FeatureSection
