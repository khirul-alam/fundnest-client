export default async function CampaignDetailsPage({ params }) {
  const { id } = await params;

  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-4xl font-bold">
        Campaign Details
      </h1>

      <p className="mt-6 text-xl">
        Campaign ID:
      </p>

      <p className="mt-2 rounded-lg bg-gray-100 p-4 font-mono">
        {id}
      </p>
    </div>
  );
}