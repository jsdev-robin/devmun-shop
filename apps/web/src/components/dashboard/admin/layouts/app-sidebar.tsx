'use client';

import * as React from 'react';
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  GalleryVerticalEnd,
  LayoutGrid,
  Settings2,
  SquareTerminal,
  Tag,
  Users,
  UserSearch,
  UserRoundPlus,
} from 'lucide-react';

import { NavMain } from './nav-main';
import { NavUser } from './nav-user';
import { TeamSwitcher } from './team-switcher';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@repo/ui/components/sidebar';

const data = {
  teams: [
    {
      name: 'Devmun1',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Devmun2',
      logo: AudioWaveform,
      plan: 'Startup',
    },
    {
      name: 'Devmun3',
      logo: Command,
      plan: 'Free',
    },
  ],
  navMain: [
    {
      title: 'Playground',
      url: '#',
      icon: SquareTerminal,
      // isActive: true,
      items: [
        {
          title: 'History',
          url: '#',
        },
        {
          title: 'Starred',
          url: '#',
        },
        {
          title: 'Settings',
          url: '#',
        },
      ],
    },
    {
      title: 'Models',
      url: '#',
      icon: Bot,
      items: [
        {
          title: 'Genesis',
          url: '#',
        },
        {
          title: 'Explorer',
          url: '#',
        },
        {
          title: 'Quantum',
          url: '#',
        },
      ],
    },
    {
      title: 'Documentation',
      url: '#',
      icon: BookOpen,
      items: [
        {
          title: 'Introduction',
          url: '#',
        },
        {
          title: 'Get Started',
          url: '#',
        },
        {
          title: 'Tutorials',
          url: '#',
        },
        {
          title: 'Changelog',
          url: '#',
        },
      ],
    },
    {
      title: 'Settings',
      url: '#',
      icon: Settings2,
      items: [
        {
          title: 'General',
          url: '#',
        },
        {
          title: 'Team',
          url: '#',
        },
        {
          title: 'Billing',
          url: '#',
        },
        {
          title: 'Limits',
          url: '#',
        },
      ],
    },
  ],

  navCat: [
    {
      title: 'Category Setup',
      url: '#',
      icon: LayoutGrid,
      items: [
        {
          title: 'Categories',
          url: '/admin/dashboard/categories',
        },
        {
          title: 'Sub Categories',
          url: '/admin/dashboard/sub-categories',
        },
        {
          title: 'Sub Sub Categories',
          url: '/admin/dashboard/sub-sub-categories',
        },
      ],
    },
    {
      title: 'Brand Setup',
      url: '#',
      icon: Tag,
      items: [
        {
          title: 'Brands',
          url: '/admin/dashboard/brand',
        },
      ],
    },
  ],
  navUsers: [
    {
      title: 'Customers',
      url: '#',
      icon: Users,
      items: [
        {
          title: 'Customer List',
          url: '/admin/dashboard/customer/list',
        },
        {
          title: 'Customer Reviews',
          url: '/admin/dashboard/customer/reviews',
        },
        {
          title: 'Wallet',
          url: '/admin/dashboard/wallet',
        },
        {
          title: 'Wallet Bonus Setup',
          url: '/admin/dashboard/wallet-bonus-setup',
        },
        {
          title: 'Loyalty Points',
          url: '/admin/dashboard/loyalty-points',
        },
      ],
    },
    {
      title: 'Vendors',
      url: '#',
      icon: LayoutGrid,
      items: [
        {
          title: 'Add New Vendor',
          url: '/admin/dashboard/add-new-vendor',
        },
        {
          title: 'Vendor List',
          url: '/admin/dashboard/vendor-list',
        },
        {
          title: 'Withdraws',
          url: '/admin/dashboard/withdraws',
        },
        {
          title: 'Withdrawal Methods',
          url: '/admin/dashboard/withdrawal-methods',
        },
      ],
    },
    {
      title: 'Delivery Men',
      url: '#',
      icon: UserSearch,
      items: [
        {
          title: 'Add New',
          url: '/admin/dashboard/delivery-men/add-new',
        },
        {
          title: 'List',
          url: '/admin/dashboard/delivery-men/list',
        },
        {
          title: 'Withdraws',
          url: '/admin/dashboard/delivery-men/withdraws',
        },
        {
          title: 'Emergency Contact',
          url: '/admin/dashboard/delivery-men/emergency-contact',
        },
      ],
    },
    {
      title: 'Employees',
      url: '#',
      icon: UserRoundPlus,
      items: [
        {
          title: 'Employee Role Setup',
          url: '/admin/dashboard/employee-role-setup',
        },
        {
          title: 'Employees',
          url: '/admin/dashboard/employees',
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavMain items={data.navCat} label="Product management" />
        <NavMain items={data.navUsers} label="Users management" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
