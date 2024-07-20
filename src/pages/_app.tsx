import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ConfigProvider } from 'antd';
import ModalProvider from '@/context/modal.context';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: 'var(--color-primary)',
          borderRadius: 5,
        },
      }}
    >
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </ConfigProvider>
  );
}
