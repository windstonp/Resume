import type { Metadata } from "next";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { ThemePanel } from "@radix-ui/themes";
import { ThemeProvider } from "@/contexts/useTheme";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
          <ThemePanel />
        </ThemeProvider>
      </body>
    </html>
  );
}
