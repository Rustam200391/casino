import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/lib/api';

const fetchAuthRegistration = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const data = await api
    .post('auth/registration', {
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
