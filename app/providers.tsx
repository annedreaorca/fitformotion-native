"use client";
import { SidebarToggleProvider } from "@/contexts/SidebarToggleContext";
import { ThemeProvider } from "@/contexts/ThemeContext"; // ✅ Custom Theme Provider

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <SidebarToggleProvider>
        {children}
      </SidebarToggleProvider>
    </ThemeProvider>
  );
}
