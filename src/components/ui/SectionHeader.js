import { MacIcon } from "./MacIcon";

export function SectionHeader({ icon, title, size = "lg" }) {
  const titleClass =
    size === "md" ? "text-headline-md" : "text-headline-lg";

  return (
    <div className="mb-10 flex flex-wrap items-center gap-4 md:mb-12">
      <MacIcon name={icon} size={size === "md" ? 28 : 32} />
      <h2 className={`${titleClass} uppercase text-primary`}>{title}</h2>
    </div>
  );
}
