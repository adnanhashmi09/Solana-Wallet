import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import CreateAccount from '../components/CreateAccount';
import RestoreAccount from '../components/RestoreAccount';
import styled from 'styled-components';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <title>Pseudo Phantom</title>
        <meta name="description" content="Solana Wallet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeTitle>
        A simple wallet for managing <a href="https://solana.com/">Solana</a>{' '}
        digital assets.
      </HomeTitle>
      <FixedHeading>
        <h1>PseudoPhantom </h1>
      </FixedHeading>

      <HomeGrid>
        <CreateAccount />
        <RestoreAccount />
      </HomeGrid>
    </>
  );
};

const FixedHeading = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  & h1 {
    font-size: 20rem;
    filter: opacity(0.5);
    font-weight: bold;
    color: #7a7985;
  }
`;

const HomeTitle = styled.h1`
  padding: 0 3rem;
  margin: 3rem 1rem;
  line-height: 1.25;
  font-size: 1.5rem;
  font-weight: normal;
  text-align: center;
  color: #fff;

  & > a {
    color: #09eab4;
    text-decoration: none;

    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
    }
  }
`;

const HomeGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  width: 100%;
`;

export default Home;
