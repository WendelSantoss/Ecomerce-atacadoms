import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/componentes/Home/header/header'
import Footer from '@/componentes/Home/footer/footer'
import ControlPageProductProvider from '@/componentes/Produtos/hooksParaBuscardados-context/ContextoPageControlDados'
import ControlLoginProvider from '@/componentes/LoginAuthContext/controlLogin'
import BarraLoading from '@/componentes/ProgressBar/barraLoading'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <ControlLoginProvider>
      <ControlPageProductProvider>
      <html lang="en">
        
        <body className={inter.className}>

          <Header/>
          
          {children}

          <Footer/>

        </body>
      </html>
      </ControlPageProductProvider>

    </ControlLoginProvider>

  )
}
