import Head from 'next/head';
import { Navbar } from '../Navbar/Navbar';
import styles from './MainLayout.module.css'

export const MainLayout = ({ children }) => {
    return (
        <div>
          <Head>
            <title>Colchonpedia</title>
            <meta name="description" content="Colchonpedia" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar />

          <main className={styles.main}>
            { children } 
          </main>
        </div>
      );
}
