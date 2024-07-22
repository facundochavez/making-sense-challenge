import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import ModalProvider from '@/context/Modal.context';
import ThemeProvider from '@/context/theme-provider';
import { ConfigProvider } from 'antd';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <ConfigProvider
      theme={{
        components: {
          Switch: {
            handleBg: 'var(--top-background-pattern)',
          },
        },
      }}
    >
      <ThemeProvider
        attribute='class'
        defaultTheme='light'
        enableSystem={false}
        disableTransitionOnChange
      >
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </ThemeProvider>
    </ConfigProvider>
  );
}
