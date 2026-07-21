import Link from "next/link";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">

      <Link
        href="/explore"
        className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
      >
        Explore Campaigns
      </Link>

      <Link
        href="/dashboard/creator/add-campaign"
        className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-black"
      >
        Start Campaign
      </Link>

    </div>
  );
}