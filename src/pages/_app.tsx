import { TailwindIndicator } from '@/components/ui/tailwind-indicator';
import { Toaster } from '@/components/ui/toaster';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { Hydrate, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useGlobalQueryClient } from '@/hooks/use-global-query-client';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = useGlobalQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
        <Toaster />
        <TailwindIndicator />
      </Hydrate>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
