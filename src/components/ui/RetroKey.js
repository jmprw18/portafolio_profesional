/**
 * Botón / chip con efecto de tecla física (como el toggle de tema)
 */
export function RetroKey({
  children,
  className = "",
  as: Component = "span",
  ...props
}) {
  return (
    <Component
      className={`retro-key inline-block border-2 border-primary bg-surface px-4 py-2 text-body-lg text-primary ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
