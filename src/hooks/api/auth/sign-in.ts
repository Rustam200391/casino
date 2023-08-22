import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/lib/api';

const fetchAuthSignIn = async ({
  email,
  password,
  twofa_code,
}: {
  email: string;
  password?: string;
  twofa_code?: string;
}) => {
  const data = await api
    .post('auth/authorization', {
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

export const useAuthSignInMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: fetchAuthSignIn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['load_data'] });
    },
  });
};

const fetchAuthSignOut = async () => {
  return await api.get('logout').json<{
    success: boolean;
  }>();
};

export const useAuthSignOutMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: fetchAuthSignOut,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['load_data'] });
    },
  });
};
