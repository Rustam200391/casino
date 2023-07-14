import { useToast } from '@/hooks/use-toast';
import config from '@/lib/config';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import ky from 'ky-universal';

const fetchAuthSignIn = async ({ email, password, twofa_code }: { email: string; password?: string; twofa_code?: string }) => {
  const data = await ky
    .post(`${config.baseUrl}/auth/authorization`, {
      headers: {
        'X-CSRF-TOKEN': 'qwerty',
      },
      json: {
        email,
        password,
        twofa_code,
      },
    })
    .json<{
      success: boolean;
    }>();

  if (!data.success) throw new Error('Данные неверны');

  return data;
};

export const useAuthSignInSubmit = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: fetchAuthSignIn,
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: ['load_data'] });
    },
  });
};
