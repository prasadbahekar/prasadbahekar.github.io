import { ArrowUpRight } from "lucide-react";
import React, { useState } from "react";

function Navbar() {
  const [active, setActive] = useState("Work");

  const items = ["Work", "Info"];

  return (
    <>
    <div className="fixed z-40 left-0 right-0 top-0 h-30 bg-linear-to-b from-black/60 to-black/0"></div>
    <div className="fixed z-40 left-0 right-0 bottom-0 h-30 bg-linear-to-t from-black/60 to-black/0"></div>
    
    <div className="hidden sm:block fixed top-7.5 left-0 p-2 px-8 rounded pl-8 z-50 bg-base-100/4 backdrop-blur-xs">
      <h2 className="font-inter text-base-content/90 text-lg leading-6">Prasad Bahekar</h2>
      <p className="text-xs text-base-content/50">Web Developer</p>
    </div>

    <nav className="fixed top-8 left-4 sm:left-1/2 sm:-translate-x-1/2 z-50">
      <div className="flex items-center rounded-full border border-white/10 bg-white/4 p-1 sm:p-1.5 backdrop-blur-xl">
        {items.map((item) => (
          <button key={item} onClick={() => setActive(item)} 
          className={`relative rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${active === item ? "bg-white/10 text-white/80 shadow-sm" : "text-white/50 hover:text-white/70"}`}
          >{item}</button>
        ))}
      </div>
    </nav>
    
    <a className="hidden sm:block fixed top-8.5 right-8 z-50">
      <button className="btn btn-square bg-base-content/15 hover:bg-base-content/20 text-white border-black">
        <svg aria-label="GitHub logo" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
      </button>
    </a>
    </>
  );
}

export default Navbar;
