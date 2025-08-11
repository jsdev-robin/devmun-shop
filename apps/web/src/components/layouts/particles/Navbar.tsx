import React from 'react';
import Link from 'next/link';
import { buttonVariants } from '@repo/ui/components/button';
import { Book, Gift, PackagePlus, Shirt } from 'lucide-react';
import { cn } from '@repo/ui/libs/utils';

const menuItems = [
  { label: 'Gift', href: '/featured/hub?sales=seller_deal', icon: Gift },
  {
    label: 'Back to School',
    href: '/featured/hub/back-to-school?sales=seller_deal',
    icon: PackagePlus,
  },
  {
    label: 'Home Favorites',
    href: '/featured/hub/home-favorites?sales=seller_deal',
    icon: Book,
  },
  {
    label: 'Fashion Favorites',
    href: '/featured/hub/fashion-favorites?sales=seller_deal',
    icon: Shirt,
  },
];

const Navbar = () => {
  return (
    <nav className="border-b-2 py-2 hidden lg:block">
      <div className="container">
        <div className="flex items-center justify-center gap-2">
          {menuItems.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                'rounded-full',
              )}
            >
              <Icon />
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
