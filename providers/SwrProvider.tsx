"use client";

import { fetcher } from "@/services/fetcher";
import { PropsWithChildren } from "react";
import { SWRConfig } from "swr";

export const SwrProvider = ({ children }: PropsWithChildren) => {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: fetcher,
      }}
    >
      {children}
    </SWRConfig>
  );
};
