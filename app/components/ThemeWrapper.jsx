// components/ThemeWrapper.jsx - Client Component
"use client";

import { ThemeProvider } from 'next-themes';

export default function ThemeWrapper({ children }) {
  return (
    <ThemeProvider attribute="class">
      {children}
    </ThemeProvider>
  );
}