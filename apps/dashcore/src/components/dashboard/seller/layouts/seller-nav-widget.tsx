import React from 'react';
import { Button } from '@repo/ui/components/button';
import { Bell, Settings } from 'lucide-react';
import PulseIcon from '@repo/ui/icons/PulseIcon';
import { QuestionMarkCircledIcon } from '@radix-ui/react-icons';

const SellerNavWidget = () => {
  return (
    <div className="ml-auto">
      <div className="flex items-center gap-1.5">
        <Button variant="ghost" size="icon" className="relative z-[99999]">
          <Bell />
          <PulseIcon />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings />
        </Button>
        <Button variant="ghost" size="icon">
          <QuestionMarkCircledIcon />
        </Button>
      </div>
    </div>
  );
};

export default SellerNavWidget;
