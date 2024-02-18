import { ReactElement, ReactNode } from "react";

export interface MenuItem {
  key: string;
  label: string;
  icon: ReactNode;
  subMenu?: Omit<MenuItem, "subMenu" | "icon">[];
}
