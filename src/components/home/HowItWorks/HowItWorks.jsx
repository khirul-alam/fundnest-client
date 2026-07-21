import SectionHeader from "@/components/common/SectionHeader";
import StepCard from "./StepCard";

const steps = [
  {
    step: "01",
    title: "Create Your Account",
    description:
      "Register as a Supporter or Creator and complete your profile securely.",
  },
  {
    step: "02",
    title: "Launch Your Campaign",
    description:
      "Create a fundraising campaign with images, goals, and compelling stories.",
  },
  {
    step: "03",
    title: "Support & Grow",
    description:
      "Donate, share campaigns, and help creators achieve their fundraising goals.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <SectionHeader
          badge="How It Works"
          title="Simple Steps to Make a Difference"
          subtitle="Whether you're raising funds or supporting a cause, FundNest makes the journey easy."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {steps.map((step) => (
            <StepCard
              key={step.step}
              {...step}
            />
          ))}

        </div>

      </div>
    </section>
  );
}