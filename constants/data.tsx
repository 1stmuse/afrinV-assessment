import React from "react";
import { MenuItem, StockAsset } from "@/common/types/interface";

import HomeIcon from "@/public/assets/svgs/homeIcon.svg";
import DashboardIcon from "@/public/assets/svgs/dashboardIcon.svg";
import Wallet from "@/public/assets/svgs/walletIcon.svg";
import News from "@/public/assets/svgs/newsIcon.svg";
import Stock from "@/public/assets/svgs/stockIcon.svg";
import Comm from "@/public/assets/svgs/peopleIcon.svg";
import Settings from "@/public/assets/svgs/settingIcon.svg";
import Contact from "@/public/assets/svgs/callIcon.svg";

export const topMenus: MenuItem[] = [
  {
    key: "/",
    label: "Home",
    icon: <HomeIcon height={20} width={20} />,
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
    icon: <Stock height={20} width={20} />,
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

export const bottomMenus: MenuItem[] = [
  {
    key: "/community",
    label: "Our community",
    icon: <Comm height={20} width={20} />,
  },
  {
    key: "/settings",
    label: "Settings",
    icon: <Settings height={20} width={20} />,
  },
  {
    key: "/contact",
    label: "Contact us",
    icon: <Wallet height={20} width={20} />,
  },
];

export const myStocks: StockAsset[] = [
  {
    name: "Apple",
    logo: "apple",
    total_shares: 10034,
    total_returns: -10,
  },
  {
    name: "Meta",
    logo: "facebook",
    total_shares: 23400,
    total_returns: 0.041,
  },
  {
    name: "Google",
    logo: "google",
    total_shares: 35000,
    total_returns: -0.335,
  },
  {
    name: "Microsoft",
    logo: "microsoft",
    total_shares: 1200,
    total_returns: 10,
  },
];
