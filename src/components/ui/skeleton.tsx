import { cn } from '@/lib/utils';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-src/pages/bonuses.tsx',
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
