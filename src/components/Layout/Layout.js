import Head from 'next/head';

import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';

import styles from './Layout.module.scss';

const Layout = ({ children, className, ...rest }) => {
  return (
    <div className={styles.layout}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
