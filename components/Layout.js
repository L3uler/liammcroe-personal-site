import Head from "next/head";

import Header from "./Header";
import NavBar from "./NavBar";

import styles from "./Layout.module.scss";

const Layout = props => (
  <div className={styles.Layout}>
    <Head>
      <title>liam mcroe.</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>

    <Header />

    <div className={styles.Content}>
      {props.children}
    </div>

    <NavBar />
    
  </div>
);

export default Layout;