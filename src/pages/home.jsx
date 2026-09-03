import { useEffect, useState } from "react";
import SmoothScroll from "../components/SmoothScroll";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Info from "../sections/Info";
import Navbar from "../sections/Navbar";
import OngoingProject from "../sections/Ongoing";
import Skills from "../sections/Skills";
import Works from "../sections/Works";
import { Loader } from "lucide-react";

function HomePage() {
  const [currentPage, setCurrentPage] = useState("Work");
  const [isLoading, setIsLoading] = useState(false);

  const changePage = (value) => {
    setIsLoading(true);
    setCurrentPage(value);
    const timer = setTimeout(() => { setIsLoading(false); }, 700);
  }

  if (isLoading) {
    return (
      <>
      <Navbar currentPage={currentPage} />
      <div className="h-screen flex items-center justify-center mt-1 flex-col animate-in fade-in duration-300">
        <Loader size={30} className="animate-spin mb-2" />
        <p className="text-base-content/60 text-sm">Loading...</p>
      </div>
      </>
    );
  }

  return (
    <div>
      <SmoothScroll />
      <Navbar currentPage={currentPage} setCurrentPage={changePage} />
      {
        currentPage == "Work" ? 
        <>
        <Hero />
        <Works />
        </>:
        <>
        <Info />
        <Skills />
        <OngoingProject />
        </>
      }
      {/*  */}
      <Footer setCurrentPage={changePage} />
    </div>
  );
}

export default HomePage;
