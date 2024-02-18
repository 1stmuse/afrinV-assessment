import { ReactElement, ReactNode } from "react";

export interface MenuItem {
  key: string;
  label: string;
  icon: ReactNode;
  subMenu?: Omit<MenuItem, "subMenu" | "icon">[];
}

export interface navState {
  show: boolean;
  setShow: (val: boolean) => void;
}

export interface StockAsset {
  name: string;
  logo: string;
  total_shares: number;
  total_returns: number;
}
