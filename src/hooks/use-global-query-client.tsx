import { QueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'react-toastify';

export const useGlobalQueryClient = () => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          mutations: {
            onError(error) {
              toast.error(`${(error as Error).message}`);
            },
          },
        },
      }),
  );

  return queryClient;
};
