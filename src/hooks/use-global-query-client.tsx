import { QueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export const useGlobalQueryClient = () => {
  const { toast } = useToast();
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          mutations: {
            onError(error) {
              toast({
                title: 'Ошибка',
                description: `${(error as Error).message}`,
              });
            },
          },
        },
      })
  );

  return queryClient;
};
