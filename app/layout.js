import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
})

export const metadata = {
  title: 'Claude Henry - Hypnopraticien',
  description: 'Hypnothérapie à [votre ville]',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
