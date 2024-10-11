import "./styles/globals.scss"

import { Manrope } from 'next/font/google'
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Toaster } from "@/components/ui/toaster"

const manrope = Manrope({
  weights: [200, 300, 400, 500, 600, 700, 800],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: "TaskExp",
  description: "Play and be Productive!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={manrope.className}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
