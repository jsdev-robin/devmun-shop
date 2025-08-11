import { cn } from '@repo/ui/libs/utils';
import React from 'react';
import StarBadgeIcon from '@repo/ui/icons/StarBadgeIcon';

interface SellerBadgeProps {
  shop: string;
  className?: string;
}

const SellerBadge: React.FC<SellerBadgeProps> = ({ shop, className }) => {
  return (
    <div
      className={cn(
        'flex items-center gap-1 text-sm font-medium text-muted-foreground truncate',
        className,
      )}
    >
      <StarBadgeIcon />
      <span className="text-xs capitalize font-normal truncate">{shop}</span>
    </div>
  );
};

export default SellerBadge;
