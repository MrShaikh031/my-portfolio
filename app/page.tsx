import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhatIDo from "@/components/WhatIDo";
import FeaturedProjects from "@/components/FeaturedProjects";
import TechStack from "@/components/TechStack";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <WhatIDo />
      <FeaturedProjects />
      <TechStack />
      <CTA />
    </main>
  );
}