import { Logo } from "@/asstes";
import About from "@/components/Home/About";
import Banner from "@/components/Home/Banner";
import Image from "next/image";

 

export default function Home() {
  return ( 
   <div className="Home">
    <Banner/>
    <About/>
   </div>
  );
}
