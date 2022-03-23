import React, { ReactNode } from "react";
import Head from "next/head";
import { Constants } from "../models/constants";

type Props = {
  children?: ReactNode;
  title: string;
};

export const Layout = ({ children, title }: Props) => {
  const description = `${Constants.totalMint} SKULL PFPs on Solana. Indie Artist Launchpad, Staking, Web 3 Tools, DAO.`;
  const socialImage = "/skeleton-crew-social.png";
  const domain = "skeletoncrew.rip";
  const url = "https://" + domain + "/";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#ffffff"></meta>

        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={socialImage} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={domain} />
        <meta property="twitter:url" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={socialImage} />

        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💀</text></svg>"
        ></link>

        <link rel="stylesheet" href="https://use.typekit.net/nxe8kpf.css" />
      </Head>
      {children}
    </>
  );
};
