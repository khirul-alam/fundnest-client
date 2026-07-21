import Image from "next/image";

import HeroBanner from "@/assets/images/hero-banner.png";

export default function HeroImage() {
  return (
    <div className="flex justify-center">

      <Image
        src={HeroBanner}
        alt="FundNest Hero Banner"
        priority
        className="w-full max-w-xl drop-shadow-2xl"
      />

    </div>
  );
}