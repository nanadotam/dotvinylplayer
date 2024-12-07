import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import "./globals.css"

const inter = Inter({ subsets: ['latin'] })

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const dotMatrix = localFont(
  { src: '../assets/font/nothing-font.ttf', variable: '--font-dot-matrix' }
)

export const metadata = {
  title: "Dot Vinyl Player",
  description: "A retro-styled music player with vinyl visualization",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${geistSans.variable} ${geistMono.variable} ${dotMatrix.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

