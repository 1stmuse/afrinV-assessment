"use client";

import { navState } from "@/common/types/interface";
import React from "react";
import { PropsWithChildren, createContext, useContext } from "react";

const context = createContext<navState>({
  show: false,
  setShow: () => {},
});

export const useNavState = () => useContext(context);

export const NavStateProvider = ({ children }: PropsWithChildren) => {
  const [show, setShow] = React.useState(false);
  return (
    <context.Provider value={{ show, setShow }}>{children}</context.Provider>
  );
};
