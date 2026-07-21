export default function SectionHeader({
  badge,
  title,
  subtitle,
  center = true,
}) {
  return (
    <div className={`${center ? "text-center" : ""} mb-14`}>
      {badge && (
        <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
          {badge}
        </span>
      )}

      <h2 className="mt-4 text-4xl font-extrabold text-slate-900">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}