import { Roboto } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav-bar/nav";
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Portal Admin",
  description: "Get started with Portal Admin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
