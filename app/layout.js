
import './globals.css'

import Navigation from './components/Navigation'
import Footer from './components/Footer'


export const metadata = {
  title: 'K.K FAMILY BAKERY',
  description: 'This website is a shopping site that sells bread',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body >
        
          <Navigation />
        
          {children}
          <Footer />
        
      </body>
    </html>
  )
}

     
  