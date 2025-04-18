import type { Metadata } from "next";
import "./globals.css";
import { MenuProvider, UserProvider } from "./context-api/providers";
import LayoutWrapper from "./components/layout-wrapper"; // Wrapper lato client
// import { Permanent_Marker } from "next/font/google";
// import { Roboto } from "next/font/google";

// const permanentMarker = Permanent_Marker({
//   weight: "400",
//   variable: "--font-permanent_marker",
//   subsets: ["latin"],
// });

// const roboto = Roboto({
//   weight: "400",
//   variable: "--font-roboto",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "KaraVoice",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`antialiased`}>
        <UserProvider>
          <MenuProvider>
            <LayoutWrapper>{children}</LayoutWrapper>
          </MenuProvider>
        </UserProvider>
      </body>
    </html>
  );
}
