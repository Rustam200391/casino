import { atom, useAtom } from 'jotai';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import React, { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  AuthEmailSubmitResponseResult,
  useAuthEmailSubmit,
} from '@/hooks/api/auth/submit-email';
import { Checkbox } from '@/components/ui/checkbox';
import { useAuthRegistrationSubmit } from '@/hooks/api/auth/register';
import { useAuthSignInSubmit } from '@/hooks/api/auth/sign-in';

/**
 * Здесь происходит регистрация и вход пользователя.
 * Для восстановления пароля лучше сделать другую модалку
 */

const getAuthType = (data?: AuthEmailSubmitResponseResult) => {
  console.log(data);

  if (!data) {
    return 'email';
  }

  if (!data?.needed_authorization) {
    return 'registration';
  }

  if (data?.needed_authorization && data?.authorization_data?.needed_password) {
    return 'password';
  }

  if (
    data?.needed_authorization &&
    !data?.authorization_data.needed_twofa_code
  ) {
    return '2fa';
  }

  return 'email';
};

const signInModalAtom = atom(false);
export const useSignInModal = () => useAtom(signInModalAtom);

const SignInModal = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const [open, setOpen] = useSignInModal();

  useEffect(() => {
    if (open) {
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setAcceptTerms(false);
    }
  }, [open]);

  const submitEmail = useAuthEmailSubmit();
  const submitRegistration = useAuthRegistrationSubmit();
  const submitSignIn = useAuthSignInSubmit();

  const step = submitEmail.data ? 2 : 1;
  const type = getAuthType(submitEmail.data?.result);

  // TODO: позднее здесь можно переделать этот функционал
  // и использовать react-hook-form, yup и так далее
  const validateForm = () => {
    if (type === 'email') {
      if (!email.trim()) return 'Email is required';
    }

    if (type === 'password') {
      if (!password) return 'Password is required';
    }

    if (type === '2fa') {
      if (!password) return '2 factor code is required';
    }

    if (type === 'registration') {
      if (!password) return 'Password is required';
      if (password.length < 8) return 'Password must be at least 8 characters';
      if (!confirmPassword) return 'Confirm password is required';
      if (password !== confirmPassword) return 'Passwords do not match';
      if (!acceptTerms) return 'You must accept the terms and conditions';
    }
    return null;
  };

  useEffect(() => {
    if (submitRegistration.data?.success || submitSignIn.data?.success)
      setOpen(false);
  }, [submitRegistration, submitSignIn, setOpen]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="relative">
            <div className="max-w-[180px] m-auto text-base w-full text-center">
              Шаг {step}/2
              <Progress value={50 * step} className="mt-2" />
            </div>
            <div className="absolute left-0 w-full h-px -bottom-4 bg-neutral-800"></div>
          </DialogTitle>
          <DialogDescription className="pt-12">
            {type === 'email' && (
              <EmailStep email={email} setEmail={setEmail} />
            )}
            {type === 'password' && (
              <PasswordStep password={password} setPassword={setPassword} />
            )}
            {type === '2fa' && (
              <TwoFAStep password={password} setPassword={setPassword} />
            )}
            {type === 'registration' && (
              <RegistrationStep
                acceptTerms={acceptTerms}
                setAcceptTerms={setAcceptTerms}
                password={password}
                setPassword={setPassword}
                confirmPassword={confirmPassword}
                setConfirmPassword={setConfirmPassword}
              />
            )}

            {error && <p className="mt-2 text-sm text-red-500">{error}</p>}

            {type === 'email' && (
              <Button
                disabled={email.trim().length === 0}
                loading={submitEmail.isLoading}
                onClick={() => submitEmail.mutate(email)}
                className="w-full text-lg mt-14 h-14"
                variant="accent"
                glow="accent"
                size="lg"
              >
                Далее
              </Button>
            )}
            {type === 'registration' && (
              <Button
                disabled={email.trim().length === 0}
                loading={submitEmail.isLoading}
                onClick={() => {
                  const err = validateForm();
                  if (err) setError(err);
                  else submitRegistration.mutate({ password, email });
                }}
                className="w-full text-lg mt-14 h-14"
                variant="accent"
                glow="accent"
                size="lg"
              >
                Создать аккаунт
              </Button>
            )}
            {(type === '2fa' || type === 'password') && (
              <Button
                disabled={email.trim().length === 0}
                loading={submitEmail.isLoading}
                onClick={() =>
                  submitSignIn.mutate({
                    email,
                    ...(type === '2fa'
                      ? { twofa_code: password }
                      : { password }),
                  })
                }
                className="w-full text-lg mt-14 h-14"
                variant="accent"
                glow="accent"
                size="lg"
              >
                Войти
              </Button>
            )}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SignInModal;

const EmailStep = ({
  email,
  setEmail,
}: {
  email: string;
  setEmail: (email: string) => void;
}) => {
  return (
    <>
      <p className="text-2xl font-bold text-white">Вход в Синдикат</p>

      <div className="grid items-center w-full max-w-full gap-2 mt-10">
        <Label htmlFor="email" className="text-base font-normal">
          Введите почту
        </Label>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          placeholder="Email"
          className="px-6 rounded-full h-14 placeholder:text-base"
        />
      </div>
    </>
  );
};

const RegistrationStep = ({
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  acceptTerms,
  setAcceptTerms,
}: {
  password: string;
  setPassword: (password: string) => void;
  confirmPassword: string;
  setConfirmPassword: (confirmPassword: string) => void;
  acceptTerms: boolean;
  setAcceptTerms: (acceptTerms: boolean) => void;
}) => {
  return (
    <>
      <p className="text-2xl font-bold text-white">Регистрация</p>

      <div className="grid items-center w-full max-w-full gap-2 mt-6">
        <Label htmlFor="password" className="text-base font-normal">
          Придумайте пароль
        </Label>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
          placeholder="Не менее 8 символов"
          className="px-6 rounded-full h-14 placeholder:text-base"
        />
      </div>

      <div className="grid items-center w-full max-w-full gap-2 mt-6">
        <Label htmlFor="confirmPassword" className="text-base font-normal">
          Повторите пароль
        </Label>
        <Input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          id="confirmPassword"
          placeholder="Пароль"
          className="px-6 rounded-full h-14 placeholder:text-base"
        />
      </div>

      <div className="flex items-center mt-6 space-x-2">
        <Checkbox
          checked={acceptTerms}
          onCheckedChange={(e) => setAcceptTerms(!acceptTerms)}
          id="terms"
        />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Согласен на обработку персональных данных
        </label>
      </div>
    </>
  );
};

const PasswordStep = ({
  password,
  setPassword,
}: {
  password: string;
  setPassword: (password: string) => void;
}) => {
  return (
    <>
      <p className="text-2xl font-bold text-white">Вход в Синдикат</p>

      <div className="grid items-center w-full max-w-full gap-2 mt-10">
        <Label htmlFor="password" className="text-base font-normal">
          Введите пароль
        </Label>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
          placeholder="Пароль"
          className="px-6 rounded-full h-14 placeholder:text-base"
        />
      </div>
    </>
  );
};

const TwoFAStep = ({
  password,
  setPassword,
}: {
  password: string;
  setPassword: (password: string) => void;
}) => {
  return (
    <>
      <p className="text-2xl font-bold text-white">Вход в Синдикат</p>

      <div className="grid items-center w-full max-w-full gap-2 mt-10">
        <Label htmlFor="twofa_code" className="text-base font-normal">
          Введите код двух факторной аутентификации
        </Label>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          id="twofa_code"
          placeholder="Пароль"
          className="px-6 rounded-full h-14 placeholder:text-base"
        />
      </div>
    </>
  );
};
