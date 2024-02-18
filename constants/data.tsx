import React from "react";
import { MenuItem } from "@/common/types/interface";

import HomeIcon from "@/assets/svgs/homeIcon.svg";
import DashboardIcon from "@/assets/svgs/dashboardIcon.svg";
import Wallet from "@/assets/svgs/walletIcon.svg";
import News from "@/assets/svgs/newsIcon.svg";
import Stock from "@/assets/svgs/stockIcon.svg";

export const topMenus: MenuItem[] = [
  {
    key: "/",
    label: "Home",
    icon: <HomeIcon height={20} width={20} />,
  },
  {
    key: "/dashboard",
    label: "Dashboard",
    icon: <DashboardIcon height={20} width={20} />,
  },
  {
    key: "/wallet",
    label: "Wallet",
    icon: <Wallet height={20} width={20} />,
  },
  {
    key: "/news",
    label: "News",
    icon: <News height={20} width={20} />,
  },
  {
    key: "/stock-and-fund",
    label: "Stock & fund",
    icon: <DashboardIcon height={20} width={20} />,
    subMenu: [
      {
        key: "/stock",
        label: "Stock",
      },
      {
        key: "/cryptocurrency",
        label: "Cryptocurrency",
      },
      {
        key: "/mutual-fund",
        label: "Mutual Fund",
      },
      {
        key: "/gold",
        label: "Gold",
      },
    ],
  },
];
