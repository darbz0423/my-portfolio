import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary";
}

function Button({
  children,
  href,
  type = "button",
  onClick,
  disabled = false,
  variant = "primary",
}: ButtonProps) {
  const classes = `
    inline-flex items-center justify-center
    rounded-[18px]
    px-7 py-3.5
    text-sm font-bold
    transition-all duration-300
    ${
      variant === "primary"
        ? `
          bg-[var(--primary)]
          hover:-translate-y-1
          hover:shadow-[0_15px_30px_var(--shadow)]
        `
        : `
          border
          border-[var(--border)]
          bg-[var(--card)]
          text-[var(--text)]
          hover:-translate-y-1
          hover:border-[var(--primary)]
        `
    }
    ${
      disabled
        ? `
          cursor-not-allowed
          opacity-50
          hover:translate-y-0
          hover:shadow-none
        `
        : ""
    }
  `;

  const primaryTextStyle =
    variant === "primary"
      ? {
          color: "var(--background)",
        }
      : undefined;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        style={primaryTextStyle}
        aria-disabled={disabled}
        onClick={(event) => {
          if (disabled) {
            event.preventDefault();
          }
        }}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      style={primaryTextStyle}
    >
      {children}
    </button>
  );
}

export default Button;