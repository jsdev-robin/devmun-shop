import React, { useState } from 'react';
import { Button } from '@repo/ui/components/button';
import { RefreshCw } from 'lucide-react';
import { cn } from '@repo/ui/libs/utils';

interface SyncImageProps extends React.ComponentProps<typeof Button> {
  className?: string;
}

const SyncImage: React.FC<SyncImageProps> = ({ className, onClick }) => {
  const [rotation, setRotation] = useState(0);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setRotation((prev) => prev + 360);
    onClick?.(e);
  };

  return (
    <Button
      variant="secondary"
      size="icon"
      className={cn(
        'absolute top-2 left-2 rounded-full hover:shadow-4',
        className,
      )}
      onClick={handleClick}
    >
      <RefreshCw
        className="transition-transform duration-500 ease-out"
        style={{ transform: `rotate(${rotation}deg)` }}
      />
    </Button>
  );
};

export default SyncImage;
