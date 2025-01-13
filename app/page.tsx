import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Layouts/Navbar";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <div className="pt-[100px]">
        <HeroSection />
        {/* <Spotlight /> */}
      </div>

    </main>
  );
}
