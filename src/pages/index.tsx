import Head from 'next/head';
import Header from '@/layouts/Header/Header';
import StatsSection from '@/layouts/StatsSection/StatsSection';
import OverviewSection from '@/layouts/OverviewSection/OverviewSection';
import PlatformModal from '@/layouts/PlatformModal/PlatformModal';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <div className='top-background' />
      <div className={`${inter.className}`} style={{ position: 'relative' }}>
        <Head>
          <title>Making Sense Challenge</title>
          <meta
            name='description'
            content='This a challenge for a job interview in Making Sense: page shows a dashboard with some data.'
          />
          <link rel='icon' href='/favicon-32x32.png' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta property='og:image' content='/favicon-32x32.png' />
          <meta property='og:title' content='Making Sense Challenge' />
          <meta
            property='og:description'
            content='This a challenge for a job interview in Making Sense: page shows a dashboard with some data.'
          />
          <meta name='google' content='notranslate' />
        </Head>
        <Header />

        <main className='main'>
          <StatsSection />
          <OverviewSection />
        </main>
        <PlatformModal />
      </div>
    </>
  );
}
