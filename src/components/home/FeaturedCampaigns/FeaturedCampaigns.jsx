"use client";

import SectionHeader from "@/components/common/SectionHeader";
import CampaignCard from "./CampaignCard";
import useFeaturedCampaigns from "@/hooks/useFeaturedCampaigns";

export default function FeaturedCampaigns() {
  const {
    data: campaigns = [],
    isLoading,
    isError,
  } = useFeaturedCampaigns();

  if (isLoading) {
    return (
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-xl font-semibold">
            Loading Featured Campaigns...
          </h2>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-xl font-semibold text-red-500">
            Failed to load campaigns.
          </h2>
        </div>
      </section>
    );
  }

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
              key={campaign._id}
              campaign={campaign}
            />
          ))}
        </div>

      </div>
    </section>
  );
}