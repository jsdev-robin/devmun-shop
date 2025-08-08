'use client';
import React from 'react';
import { Home, Settings, Bell, Lock } from 'lucide-react';
import { buttonVariants } from '@repo/ui/components/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@repo/ui/libs/utils';

const menuItems = [
  {
    icon: Home,
    label: 'Home',
    href: '/admin/dashboard/overview',
    activeColor: 'text-blue-500',
  },
  {
    icon: Bell,
    label: 'Notifications',
    href: '/admin/dashboard/account/notifications',
    activeColor: 'text-orange-500',
  },
  {
    icon: Lock,
    label: 'Password',
    href: '/admin/dashboard/account/password',
    activeColor: 'text-red-500',
  },
  {
    icon: Settings,
    label: 'Settings',
    href: '/admin/dashboard/account/settings',
    activeColor: 'text-green-500',
  },
];

const Template = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        {menuItems.map((item, i) => (
          <Link
            href={item.href}
            key={i}
            className={cn(
              buttonVariants({
                variant: pathname === item.href ? 'secondary' : 'ghost',
              }),
              pathname === item.href && item.activeColor,
            )}
          >
            <item.icon className={cn(item.activeColor)} />
            {item.label}
          </Link>
        ))}
      </div>
      {children}
    </div>
  );
};

export default Template;
