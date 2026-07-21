import SectionHeader from "@/components/common/SectionHeader";
import CampaignCard from "./CampaignCard";

import campaigns from "@/data/campaigns";

export default function FeaturedCampaigns() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <SectionHeader
          badge="Featured"
          title="Featured Campaigns"
          subtitle="Support the most inspiring campaigns currently raising funds."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {campaigns.map((campaign) => (
            <CampaignCard
              key={campaign.id}
              campaign={campaign}
            />
          ))}

        </div>

      </div>

    </section>
  );
}