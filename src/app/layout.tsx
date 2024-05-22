import type { Metadata } from "next";
import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Provider from "./provider";

const plus = Plus_Jakarta_Sans({ subsets: ["latin", "cyrillic-ext"], weight: ["200" , "300" , "400" , "500" , "600" , "700" , "800"], variable: '--font-plus'});
const mont = Montserrat({subsets: ["latin", "cyrillic-ext"], weight: ["200" , "300" , "400" , "500" , "600" , "700" , "800"], variable: '--font-mont'}) 

export const metadata: Metadata = {
  title: "Tishina",
  description: "Tishina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plus.variable} ${mont.variable} font-sans`}>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
