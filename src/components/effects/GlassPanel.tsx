import React, { ReactNode } from "react";

interface GlassPanelProps {
  children: ReactNode;
  variant?: "clear" | "frosted" | "smoked";
  className?: string;
  withSpecular?: boolean;
  onClick?: () => void;
}

export const GlassPanel: React.FC<GlassPanelProps> = ({
  children,
  variant = "clear",
  className = "",
  withSpecular = false,
  onClick,
}) => {
  const variantClass = {
    clear: "material-clear-glass",
    frosted: "material-frosted-glass",
    smoked: "material-smoked-glass",
  }[variant];

  return (
    <div
      onClick={onClick}
      className={`rounded-xl transition-all duration-300 ${variantClass} ${
        withSpecular ? "material-specular" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};
