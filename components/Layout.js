// components/Layout.js

import Head from "next/head";

import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";

import styles from "./Layout.module.scss";

import navButtons from "../config/navbarButtons";
import socialButtons from "../config/socialButtons";


const Layout = props => {

  const appTitle = 'liam mcroe.';

  return (
    <div className={styles.Layout}>
      <Head>
        <title>liam mcroe.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      <Header appTitle={appTitle} socialButtons={socialButtons}/>
      
      <div className={styles.Content}>
        {props.children}
      </div>

      <NavBar navButtons={navButtons}/>

    </div>
  );
};

export default Layout;