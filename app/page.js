import Hero from "@/components/home/hero";
import HeroHomeVideo from "@/components/home/hero_video";
import OpenEnrollment from "@/components/home/open_enrollment";
import School from "@/components/home/school";
import Welcome from "@/components/home/welcome";

export default function Home() {
  return (
    <>
      <HeroHomeVideo />
      <Welcome />
      <Hero />
      <School />
      <OpenEnrollment/>
    </>
  );
}
