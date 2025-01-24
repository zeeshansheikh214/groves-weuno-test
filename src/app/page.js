import About from "@/components/Home/About";
import Banner from "@/components/Home/Banner";
import Contact from "@/components/Home/Contact";
import Experiences from "@/components/Home/Experiences";
import GeneralAccess from "@/components/Home/GeneralAccess";
import ResturantGrid from "@/components/Home/ResturantGrid";

export default function Home() {
  return (
    <div className="Home">
      <Banner />
      <About />
      <GeneralAccess />
      <ResturantGrid />
      <Experiences />
      <Contact />
    </div>
  );
}
