'use client';

import * as React from 'react';
import { GalleryVerticalEnd, LayoutGrid, Tag } from 'lucide-react';

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
  ],

  navCat: [
    {
      title: 'Category Setup',
      url: '#',
      icon: LayoutGrid,
      items: [
        {
          title: 'Categories',
          url: '/dashboard/seller/product/categories',
        },
        {
          title: 'Sub Categories',
          url: '/dashboard/seller/product/sub-categories',
        },
        {
          title: 'Sub Sub Categories',
          url: '/dashboard/seller/product/sub-sub-categories',
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
          url: '/dashboard/seller/product/brand',
        },
      ],
    },
  ],
  navProduct: [
    {
      title: 'Product',
      url: '#',
      icon: LayoutGrid,
      items: [
        {
          title: 'Product list',
          url: '/dashboard/seller/product/list',
        },
        {
          title: 'Approved product list',
          url: '/dashboard/seller/product/approved-list',
        },
        {
          title: 'New product request',
          url: '/dashboard/seller/product/new-request',
        },
        {
          title: 'Denied product request',
          url: '/dashboard/seller/product/denied-request',
        },
        {
          title: 'Add new product',
          url: '/dashboard/seller/product/create/v1',
        },
        {
          title: 'Product gallery',
          url: '/dashboard/seller/product/gallery',
        },
        {
          title: 'Bulk import',
          url: '/dashboard/seller/product/bulk-import',
        },
        {
          title: 'Request Restock List',
          url: '/dashboard/seller/product/request-restock-list',
        },
      ],
    },
  ],
};

export function SellerDashSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navCat} label="Order management" />
        <NavMain items={data.navProduct} label="Product management" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
