import Image from "next/image";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Section from "./components/Section";
import Destinations from "./components/Destinations";

export default function Home() {
  return (
    <div>
       <Header/>
       <Banner/>
       <Section/>
       <Destinations/>
    </div>
    
   
  );
}
