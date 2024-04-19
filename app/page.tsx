import Image from "next/image";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Section from "./components/Section";
import Destinations from "./components/Destinations";
import Heading from "./components/Heading";
import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <div>
       <Header/>
       <Banner/>
       <Section/>
       <Destinations/>
       <Gallery/>
       <Heading/>
    </div>
    
   
  );
}
