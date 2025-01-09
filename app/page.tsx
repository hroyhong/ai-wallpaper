import Header from "@/components/header";
import Hero from "@/components/hero";
import Wallpapers from "@/components/wallpapers";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-between items-center">
      <Header />
      <Hero />
      <Wallpapers />
      <Footer />
    </div>
  );
}
