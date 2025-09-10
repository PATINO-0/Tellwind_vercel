import { ReactNode } from "react";
import clsx from "clsx";

export default function IconCircle({
  children,
  active = false,
}: {
  children: ReactNode;
  active?: boolean;
}) {
  return (
    <div
      className={clsx(
        "flex size-11 items-center justify-center rounded-2xl",
        active ? "bg-indigo-600 text-white" : "bg-white text-slate-600 shadow-soft"
      )}
    >
      {children}
    </div>
  );
}
