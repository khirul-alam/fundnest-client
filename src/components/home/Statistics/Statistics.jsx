import SectionHeader from "@/components/common/SectionHeader";
import StatCard from "./StatCard";

const stats = [
  {
    number: "5K+",
    title: "Active Users",
  },
  {
    number: "250+",
    title: "Successful Campaigns",
  },
  {
    number: "$1.2M",
    title: "Funds Raised",
  },
  {
    number: "98%",
    title: "Success Rate",
  },
];

export default function Statistics() {
  return (
    <section className="bg-slate-100 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeader
          badge="Our Achievement"
          title="FundNest in Numbers"
          subtitle="Trusted by thousands of creators and supporters around the world."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <StatCard
              key={item.title}
              number={item.number}
              title={item.title}
            />
          ))}
        </div>

      </div>
    </section>
  );
}