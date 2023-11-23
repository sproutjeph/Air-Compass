"use client";

import NextUiProvider from "@/providers/NextUiProvider";
import ToasterProvider from "@/providers/ToasterProvider";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextUiProvider>
      <ToasterProvider />
      {children}
    </NextUiProvider>
  );
}
