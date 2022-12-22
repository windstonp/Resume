import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Analytics } from '@vercel/analytics/react';
import { DefaultSeo, SocialProfileJsonLd } from 'next-seo';
import { theme } from '../global/styles/theme';
import GlobalStyles from '../global/globalstyle';
import 'react-toastify/dist/ReactToastify.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo
        titleTemplate="%s | Alvezs"
        defaultTitle="Alvezs"
        themeColor={theme.colors.background[50]}
        canonical="https://www.alvez.dev/"
        description="Full-Stack developer based in Brazil"
        openGraph={{
          type: 'Profile',
          url: 'https://www.alvez.dev/',
          locale: 'en_US',
          description: 'Full-Stack developer based in Brazil',
          siteName: 'João Vitor Assunção Alves',
          profile: {
            firstName: 'João Vitor',
            lastName: 'Alves',
            username: 'Alvezs',
            gender: 'male',
          },
          images: [
            {
              url: 'https://www.alvez.dev/img/card.jpg',
              secureUrl: 'https://www.alvez.dev/img/card.jpg',
              width: 1140,
              height: 490,
              alt: 'Front-end and Mobile developer with an eye for design.',
              type: 'image/jpeg',
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            httpEquiv: 'content-type',
            content: 'text/html; charset=utf-8',
          },
          {
            name: 'application-name',
            content: 'João Vitor Assunção Alves',
          },
          {
            name: 'theme-color',
            content: theme.colors.primary,
          },
        ]}
        additionalLinkTags={[
          {
            rel: 'icon',
            type: 'image/png',
            href: '/img/favicon.png',
          },
          {
            rel: 'apple-touch-icon',
            href: '/img/favicon.png',
            type: 'image/png',
          },
        ]}
      />
      <SocialProfileJsonLd
        type="Person"
        name="João Vitor Assunção Alves"
        url="https://www.alvez.dev"
        sameAs={[
          process.env.NEXT_PUBLIC_GITHUB_URL!,
          process.env.NEXT_PUBLIC_LINKEDIN_URL!,
        ]}
      />
      <GlobalStyles />
      <Component {...pageProps} />
      {process.env.NODE_ENV !== 'development' && <Analytics />}
    </ThemeProvider>
  );
}

export default MyApp;
