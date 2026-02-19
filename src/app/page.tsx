import { Hero } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { StackSection } from "@/components/sections/stack";
import { BlogSection } from "@/components/sections/blog";
import { AboutSection } from "@/components/sections/about";
import { CTASection } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsSection />
      <StackSection />
      <BlogSection />
      <AboutSection />
      <CTASection />
    </>
  );
}
