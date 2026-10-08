import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "Incognito | Anonymous video and Voice Chat",
  description: "Random video and Voice Chat with Random people",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
