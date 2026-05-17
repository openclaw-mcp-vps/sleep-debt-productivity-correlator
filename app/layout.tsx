import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SleepSync — Correlate Sleep with Productivity",
  description: "Connect your sleep data with GitHub, Todoist, and RescueTime to discover how rest drives your best work."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="674efd67-ac45-48c3-aba3-4ac365b7801a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
