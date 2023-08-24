import React, { memo } from 'react';
import { Loader2Icon } from 'lucide-react';

const Loader = () => (
  <div className="h-full w-full flex items-center justify-center">
    <Loader2Icon
      height={100}
      width={100}
      className="animate-spin text-green-500"
    />
  </div>
);

export default memo(Loader);
