import { useState } from "react";
import logo from "../assets/logo.png";
import navItems from "../Constant/constant.jsx";
import {Menu, X} from "lucide-react"

const Navbar = () => {

  const [mobileView, setMobileView] = useState(false)

  const toggleNavbar = () => {
    setMobileView(!mobileView)
  }
  return (
    <nav className="sticky border-b py-3 z-50 top-0 border-natural-700/80 backdrop-blur-lg">
      <div className="container relative mx-auto px-4 text-sm">
        <div className="flex justify-between item-center">
          <div className="logo flex flex-shrink-0 items-center">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight"> VirtualR </span>
          </div>
          <ul className="hidden ml-14 space-x-12 py-3 lg:flex">
            {navItems.map((item, index) => (
              <li key={index} >
                
                <a href={item.href}>
                {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex space-x-12 item-center justify-center">
            <a href="#" className="py-2 px-3 text-base border rounded-md hover:border-orange-500 shadow-orange-800"> Sign In</a>
            <a href="#" className="py-2 px-3 text-base border rounded-md bg-gradient-to-r from-orange-500 to-orange-800"> Create an account</a>
          </div>
          <div className="lg:hidden md-flex flex-col justify-end">
            <button className = "pt-2" onClick={toggleNavbar}> {mobileView ? <X/> : <Menu/>}</button>
          </div>
        </div>
        {mobileView && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li  key= {index} className="py-4">
                  <a href={item.href}> {item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">Sign In</a>
              <a href="#" className="py-2 px-3 border rounded-md bg-gradient-to-r from-orange-500 to-orange-800">Create an account</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
