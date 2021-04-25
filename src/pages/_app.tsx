import React, { useState } from "react"
import '../styles/global.scss';

import Header from "../components/Header";
import Player from "../components/Player";

import styles from '../styles/app.module.scss';
import { PlayerContextProvider } from "../context/PlayerContext";



function MyApp({ Component, pageProps }) {

  return (

    <PlayerContextProvider>

      <div className={styles.wrapper}>
        <main>
          <Header />

          <Component {...pageProps} />

        </main>

        <div className={styles.playerMax}>
          <div className={styles.playerMax}>
            <Player />
          </div>
        </div>


      </div>
    </PlayerContextProvider>

  );
}

export default MyApp
