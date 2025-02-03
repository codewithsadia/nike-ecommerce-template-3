import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "Nike Ecommerce Web",
  description: "Nike Ecommerce Web by Sadia Imran",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CartProvider>
      <html lang="en">
        <body className="antialiased overflow-x-hidden">
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </CartProvider>
  );
}
