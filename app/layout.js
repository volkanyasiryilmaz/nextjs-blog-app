import { Inter, Poppins} from 'next/font/google'
import styles from './styles.module.css';
import '../styles/global.css';
import Head from './head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100','400','700']

})
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <Head/>
      <body className={styles.container}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
