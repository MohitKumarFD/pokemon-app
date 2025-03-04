import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: "Pokemon Search App",
  description: "Gotta Catch 'Em All - Know you Pokemon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased min-h-screen`} >
        <main className="container mx-auto py-8 px-4">
        {children}
        </main>
      </body>
    </html>
  );
}
