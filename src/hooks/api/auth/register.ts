import config from '@/lib/config';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import ky from 'ky-universal';

const fetchAuthRegistration = async ({ email, password }: { email: string; password: string }) => {
  const data = await ky
    .post(`${config.baseUrl}/auth/registration`, {
      headers: {
        'X-CSRF-TOKEN': 'qwerty',
      },
      json: {
        email,
        password,
      },
    })
    .json<{
      success: boolean;
    }>();

  if (!data.success) throw new Error('Произошла ошибка при отправке данных');
  return data;
};

export const useAuthRegistrationSubmit = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: fetchAuthRegistration,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['load_data'] });
    },
  });
};
