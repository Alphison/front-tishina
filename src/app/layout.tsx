import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Provider from "./provider";
import Modal from "@/components/modal/modal";
import { Toaster } from "sonner";
import ProviderAuth from "./providerAuth";
import MenuBurger from "@/components/menuBurger/menuBurger";
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
      <body className={mont.variable}>
        <Provider>
          <ProviderAuth>
            <Toaster position="bottom-right"/>
            <MenuBurger />
            <Modal />
            <Header />
            {children}
          </ProviderAuth>
        </Provider>
      </body>
    </html>
  );
}
