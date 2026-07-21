import {
  UserPlus,
  Rocket,
  HeartHandshake,
} from "lucide-react";

const icons = {
  "01": UserPlus,
  "02": Rocket,
  "03": HeartHandshake,
};

export default function StepCard({
  step,
  title,
  description,
}) {
  const Icon = icons[step];

  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-3 hover:border-blue-500 hover:shadow-2xl">

      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">

        <Icon size={32} />

      </div>

      <p className="mb-2 text-sm font-bold text-blue-600">
        STEP {step}
      </p>

      <h3 className="mb-4 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="leading-7 text-slate-600">
        {description}
      </p>

    </div>
  );
}