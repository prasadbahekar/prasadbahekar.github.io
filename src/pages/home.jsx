import SmoothScroll from "../components/SmoothScroll";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Navbar from "../sections/Navbar";
import Works from "../sections/Works";

function HomePage() {
  return (
    <div>
      <SmoothScroll />
      <Navbar />
      <Hero />
      <Works />
      <Footer />
    </div>
  );
}

export default HomePage;
