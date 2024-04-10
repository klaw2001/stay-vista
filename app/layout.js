import { Poppins } from "next/font/google";
import "./globals.css";
import "./style.css"
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Stay Visa",
  description:
    "Stay Visa is Perfect Platform for choosing hotels for your vacation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
