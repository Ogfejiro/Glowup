"use client";

import About from "@/components/About";
import Aim from "@/components/Aim";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services/>
      <Aim/>
      <Footer/>
    </main>
  );
}
