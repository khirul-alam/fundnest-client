export default function HeroStats() {
  return (
    <div className="mt-14 grid grid-cols-3 gap-8">

      <div>
        <h2 className="text-3xl font-bold text-blue-500">
          5K+
        </h2>

        <p className="text-gray-400">
          Active Users
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-green-400">
          250+
        </h2>

        <p className="text-gray-400">
          Campaigns
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-orange-400">
          1M+
        </h2>

        <p className="text-gray-400">
          Credits Raised
        </p>
      </div>

    </div>
  );
}