import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({ subsets: ["latin"], variable: "--font-serif", weight: ["400"], });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created with the help of Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
          className={twMerge(
            inter.variable, 
            calistoga.variable, 
            "bg-gray-900 text-white antialiased font-sans"
            )}
            >
              {children}
              <Toaster
                position="bottom-center"
                toastOptions={{
                  style: {
                    background: '#1a202c', // A dark gray matching your theme
                    color: '#e2e8f0', // Light text
                    border: '1px solid #4a5568', // Subtle border
                    borderRadius: '9999px', // Rounded pill shape
                  },
                }}
              />
       </body>
    </html>
  );
}
