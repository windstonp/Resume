import type { NextPage } from 'next'
import Head from 'next/head';
import {HomeTemplate} from '../screens/Home';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Home | J.Alves
        </title>
      </Head>
      <HomeTemplate />
    </>
  )
}

export default Home
