import { resolveMacIcon } from "@/lib/mac-icons";

/**
 * Icono pixel Mac clásico (SVG local en /public/icons/mac)
 * @param {"default" | "on-dark"} variant — on-dark para tarjeta de contacto
 */
export function MacIcon({
  name,
  size = 24,
  className = "",
  variant = "default",
}) {
  const file = resolveMacIcon(name);
  const variantClass =
    variant === "on-dark" ? "mac-icon-on-dark" : "mac-icon-default";

  return (
    <img
      src={`/icons/mac/${file}.svg`}
      alt=""
      width={size}
      height={size}
      className={`mac-icon inline-block shrink-0 object-contain ${variantClass} ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
      decoding="async"
    />
  );
}
