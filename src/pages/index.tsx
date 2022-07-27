import type { NextPage } from 'next'
import Head from 'next/head';
import {HomeTemplate} from '../templates/HomeTemplate';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          J.Alves
        </title>
      </Head>
      <HomeTemplate />
    </>
  )
}

export default Home
