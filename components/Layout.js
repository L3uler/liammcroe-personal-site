import Head from "next/head";

import Header from "./Header";
import NavBar from "./NavBar";

import styles from "./Layout.module.scss";

import navButtons from "../config/buttons";


const Layout = props => {

  const appTitle = 'liam mcroe.';

  return (
    <div className={styles.Layout}>
      <Head>
        <title>liam mcroe.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      <Header appTitle={appTitle} />

      <div className={styles.Content}>
        {props.children}
      </div>

      <NavBar navButtons = {navButtons}/>

    </div>
  );
};

export default Layout;