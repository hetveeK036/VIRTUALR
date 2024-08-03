import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection';
import FeatureSection from './Components/FeatureSection';
import WorkFlow from './Components/WorkFlow';
import Footer from './Components/Footer';
import Pricing from './Components/Pricing';
import Testimonials from './Components/Testimonials';

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="max-w-7xl pt-19 px-6 mx-auto">
        <HeroSection/>
        <FeatureSection/>
        <WorkFlow/>
        <Pricing/>
        <Testimonials/>

      <Footer/>
      </div>
    </div>
  )
}

export default App

// position: absolute;
//     left: -15px;
//     top: 0;
//     content: "";
//     height: 2px;
//     width: 10px;
//     background: #

//     display: inline-block;
//     width: 50px;
//     height: 2px;
//     background: #25285f;
//     position: relative;
//     z-index: 1;
//     left: 10px;