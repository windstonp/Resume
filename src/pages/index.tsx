import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { HomeTemplate } from '../screens/Home';

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="Home" />
      <HomeTemplate />
    </>
  );
};

export default Home;
