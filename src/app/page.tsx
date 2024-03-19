import Link from "next/link";
import { Hero } from "./components/Hero";
import { HouseConfort } from "./components/HouseConfort";
import { HealthQuality } from "./components/HealthQuality";
import { Header } from "./components/Header";
import { OnlineMenu } from "./components/OnlineMenu";
import { Flavours } from "./components/Flavours";
import { About } from "./components/About";
import { Delivery } from "./components/Delivery";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-main font-sans">
      <Header />
      <main className="flex flex-col items-center">
        <Hero />
        <OnlineMenu />
        <Flavours />
        <HouseConfort />
        <HealthQuality />
        <About />
        <Delivery />
      </main>
      <Footer />
    </div>
  );
}
