import './globals.scss'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shehroz K.',
  description: 'A FrontEnd Web3 Developer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}
      <Footer />
      </body>
    </html>
  )
}
