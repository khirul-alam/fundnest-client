import Image from "next/image";
import Link from "next/link";

export default function CampaignCard({ campaign }) {
  const progress = Math.round(
    (campaign.raised / campaign.goal) * 100
  );

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <Image
        src={campaign.image}
        alt={campaign.title}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">

        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
          {campaign.category}
        </span>

        <h3 className="mt-4 text-2xl font-bold">
          {campaign.title}
        </h3>

        <p className="mt-3 text-gray-600">
          {campaign.description}
        </p>

        <div className="mt-6">

          <div className="mb-2 flex justify-between text-sm">
            <span>Raised</span>

            <span>{progress}%</span>
          </div>

          <div className="h-3 rounded-full bg-gray-200">

            <div
              className="h-3 rounded-full bg-blue-600"
              style={{ width: `${progress}%` }}
            />

          </div>

        </div>

        <div className="mt-6 flex justify-between">

          <div>

            <p className="text-sm text-gray-500">
              Raised
            </p>

            <h4 className="font-bold text-blue-600">
              ${campaign.raised.toLocaleString()}
            </h4>

          </div>

          <div>

            <p className="text-sm text-gray-500">
              Goal
            </p>

            <h4 className="font-bold">
              ${campaign.goal.toLocaleString()}
            </h4>

          </div>

        </div>

        <Link
          href={`/campaign/${campaign.id}`}
          className="mt-8 block rounded-xl bg-blue-600 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
        >
          View Details
        </Link>

      </div>
    </div>
  );
}