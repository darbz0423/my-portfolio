import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
}

function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[24px] border border-[var(--border)] bg-[var(--card)] shadow-[0_18px_45px_var(--shadow)] transition-all duration-300 hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Card;