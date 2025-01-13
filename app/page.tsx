import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Layouts/Navbar";
import Image from "next/image";

export default function Home() {
  return (
   <main className="">
    <Navbar />
    <div className="pt-[100px]">
      <HeroSection />
    </div>
   </main>
  );
}
