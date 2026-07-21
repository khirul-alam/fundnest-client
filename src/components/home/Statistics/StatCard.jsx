export default function StatCard({ number, title }) {
  return (
    <div className="rounded-2xl bg-white p-8 text-center shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
      <h2 className="text-4xl font-extrabold text-blue-600">
        {number}
      </h2>

      <p className="mt-3 text-gray-600">
        {title}
      </p>
    </div>
  );
}