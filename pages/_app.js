import "@/styles/globals.css";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

export default function App({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <Component  {...pageProps} />
    </main>)
} 
