"use client";

import Footer from "@/components/footer/Footer";
import GlobalNavigationBar from "@/components/gnb/GlobalNavigationBar";
import AboutMe from "@/components/sections/AboutMeSection/AboutMe";
import Hero from "@/components/sections/HeroSection/Hero";
import MainProjects from "@/components/sections/MainProjectsSection/MainProjects";
import SideProjects from "@/components/sections/SideProjectsSection/SideProjects";
import TechStack from "@/components/sections/TechStackSection/TechStack";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <MainProjects />
      <GlobalNavigationBar />
      <SideProjects />
      <TechStack />
      <Footer />
    </>
  );
}
