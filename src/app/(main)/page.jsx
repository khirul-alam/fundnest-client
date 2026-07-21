import HeroSection from "@/components/home/Hero/HeroSection";
import Statistics from "@/components/home/Statistics/Statistics";
import FeaturedCampaigns from "@/components/home/FeaturedCampaigns/FeaturedCampaigns";
import HowItWorks from "@/components/home/HowItWorks/HowItWorks";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Statistics />
      <FeaturedCampaigns />
      <HowItWorks />
    </>
  );
}