
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "../context/AuthContext"
import { MusicProvider } from "../context/MusicContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Music Streaming App",
  description: "Stream your favorite music anytime, anywhere.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AuthProvider>
            <MusicProvider>
              {children}
            </MusicProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'