"use client";

import { BREAKPOINT } from "@/consts/";
import { useBreakpointValue } from "@chakra-ui/react";

export const useBreakPoint = () => {
  return useBreakpointValue(
    {
      base: BREAKPOINT.MOBILE,
      md: BREAKPOINT.TABLET,
      lg: BREAKPOINT.DESKTOP,
    },
    { ssr: false }
  );
};
