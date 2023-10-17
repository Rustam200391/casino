// https://ui.shadcn.com/docs/components/typography

import { cn } from '@/lib/utils';
import { ComponentProps, PropsWithChildren } from 'react';

interface Props extends ComponentProps<'h1' | 'h2' | 'h3' | 'h4'>, PropsWithChildren {
  className?: string;
}

export function TypographyH1(props: Props) {
  return (
    <h1 {...props} className={cn('text-2xl font-extrabold tracking-tight scroll-m-20 lg:text-3xl', props.className)}>
      {props.children}
    </h1>
  );
}

export function TypographyH2(props: Props) {
  return (
    <h2 {...props} className={cn('scroll-m-20 text-2xl font-semibold tracking-tight transition-colors first:mt-0', props.className)}>
      {props.children}
    </h2>
  );
}

export function TypographyH3(props: Props) {
  return (
    <h3 {...props} className={cn('scroll-m-20 text-xl font-semibold tracking-tight', props.className)}>
      {props.children}
    </h3>
  );
}

export function TypographyH4(props: Props) {
  return (
    <h4 {...props} className={cn('scroll-m-20 text-xl font-semibold tracking-tight', props.className)}>
      {props.children}
    </h4>
  );
}
