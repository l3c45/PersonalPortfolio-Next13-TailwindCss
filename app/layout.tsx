import { Exo_2 } from '@next/font/google'
import Head from 'next/head'

const inter = Exo_2({
  subsets: ['latin'],
  variable: '--font-exo',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (    
  <html>
  
      <body className={`${inter.variable} overflow-x-hidden bg-slate-900 text-white `} >
       
   
        {children}</body>
    </html>
    
  )
}
