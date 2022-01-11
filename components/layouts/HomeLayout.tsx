import React from "react";
//import Navbar from "../Home/Navbar";
import Head from "next/head";
import { Layout } from ".";
import Link from "next/link";
type Props = {};

export const HomeLayout: React.FC<Props> = (props) => {
  return (
    <div className="theme-light">
      <Head>
        <title>Gümüş Hukuk Bürosu</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Akıl Fikir Mektebi" key="title" />
        <meta property="key" content="" />
        <meta
          property="keywords"
          content="problemler, soru bankası, kitabı, video, ders, koz, tyt, kaf, raunt, , problemler, soru bankası, kitabı, video, ders, koz, tyt, kaf, raunt, ,KOZ Serisi TYT Problemler Video Ders Seti"
        />
        <meta name="keywords" property="tyt, ayt, soru bankası" />
      </Head>

      {props.children}
    </div>
  );
};
