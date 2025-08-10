'use client';

import React, { useMemo, useState } from 'react';
import {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
  SortingState,
} from '@tanstack/react-table';
import IndeterminateCheckbox from '@repo/ui/components/indeterminate-checkbox';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/card';
import RowDragHandle from '@repo/ui/components/row-drag-handle';
import { getSortString } from '@repo/ui/libs/getSortString';
import { buildQueryParams } from '@repo/ui/libs/buildQueryParams';
import { IProduct } from '@repo/ui/types/product-types';
import MunTable from '@repo/ui/data-grid/mun-table';
import RowPin from '@repo/ui/components/row-pin';
import Image from 'next/image';
import { rgbDataURL } from '@repo/ui/libs/rgbDataURL';
import { useGetAdminProductsQuery } from '../../../../../lib/features/services/dashboard/admin/adminProductApi';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@repo/ui/components/dropdown-menu';
import { Button } from '@repo/ui/components/button';
import {
  EllipsisVertical,
  PencilIcon,
  ShareIcon,
  TrashIcon,
} from 'lucide-react';

const AdminProductList = () => {
  const columns = useMemo<ColumnDef<IProduct, unknown>[]>(
    () => [
      {
        accessorFn: (_row, index) => index + 1,
        cell: ({ row }) => row.index + 1,
        id: 'rowNumber',
        header: '',
        size: 54,
        maxSize: 54,
        enableColumnFilter: false,
      },
      {
        id: 'drag-handle',
        cell: ({ row }) => <RowDragHandle rowId={row.id} />,
        size: 36,
      },
      {
        id: 'pin',
        header: () => 'Pin',
        cell: ({ row }) => <RowPin row={row} />,
        size: 60,
        maxSize: 60,
      },
      {
        id: 'actions',
        header: () => <div className="writing-mode-vertical-rl">Online</div>,
        cell: () => (
          <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <EllipsisVertical />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuGroup className="*:data-[slot=dropdown-menu-item]:[&>svg]:text-muted-foreground">
                  <DropdownMenuItem>
                    <PencilIcon />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <ShareIcon />
                    Share
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive">
                    <TrashIcon />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ),
        size: 60,
        minSize: 60,
        maxSize: 60,
        enableColumnFilter: false,
      },
      {
        id: 'select',
        header: ({ table }) => (
          <IndeterminateCheckbox
            checked={table.getIsAllRowsSelected()}
            indeterminate={table.getIsSomeRowsSelected()}
            onChange={table.getToggleAllRowsSelectedHandler()}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <IndeterminateCheckbox
            checked={row.getIsSelected()}
            disabled={!row.getCanSelect()}
            indeterminate={row.getIsSomeSelected()}
            onChange={row.getToggleSelectedHandler()}
            aria-label="Select row"
          />
        ),
        size: 40,
        maxSize: 40,
        enableColumnFilter: false,
      },
      {
        id: 'imgs',
        header: 'Images',
        columns: [
          {
            id: 'imgs',
            header: 'Gallery',
            cell: ({ row }) => (
              <div className="flex flex-wrap gap-2">
                {row.original.imgs &&
                  row.original.imgs
                    .slice(0, 4)
                    .map((img, i) => (
                      <Image
                        key={i}
                        src={img.url}
                        width={32}
                        height={32}
                        alt={`Product image ${i + 1}`}
                        className="w-8 h-8 object-cover rounded"
                        blurDataURL={rgbDataURL(i)}
                        placeholder="blur"
                        loading="lazy"
                      />
                    ))}
              </div>
            ),
            enableColumnFilter: false,
            size: 210,
            maxSize: 210,
          },
        ],
      },
      {
        id: 'basicInfo',
        header: 'Basic Info',
        columns: [
          {
            id: 'basicInfo.title',
            accessorKey: 'basicInfo.title',
            header: 'Title',
            meta: { filterVariant: 'text' },
            enableHiding: false,
          },
          {
            id: 'basicInfo.productType',
            accessorKey: 'basicInfo.productType',
            header: 'Product Type',
            meta: { filterVariant: 'select' },
          },
          {
            id: 'basicInfo.productCode',
            accessorKey: 'basicInfo.productCode',
            header: 'Product Code',
            meta: { filterVariant: 'text' },
          },
          {
            id: 'basicInfo.brand',
            accessorKey: 'basicInfo.brand',
            header: 'Brand',
            meta: { filterVariant: 'text' },
          },
          {
            id: 'basicInfo.color',
            accessorKey: 'basicInfo.color',
            header: 'Color',
            meta: { filterVariant: 'text' },
          },
          {
            id: 'basicInfo.size',
            accessorKey: 'basicInfo.size',
            header: 'Size',
            meta: { filterVariant: 'text' },
          },
          {
            id: 'basicInfo.weight',
            accessorKey: 'basicInfo.weight',
            header: 'Weight',
            meta: { filterVariant: 'number' },
          },
        ],
      },

      {
        id: 'pricing',
        header: 'Pricing',
        columns: [
          {
            id: 'pricing.basePrice',
            accessorKey: 'pricing.basePrice',
            header: 'Base Price',
            meta: { filterVariant: 'number' },
          },
          {
            id: 'pricing.salePrice',
            accessorKey: 'pricing.salePrice',
            header: 'Sale Price',
            meta: { filterVariant: 'number' },
          },
          {
            id: 'pricing.priceCurrency',
            accessorKey: 'pricing.priceCurrency',
            header: 'Currency',
            meta: { filterVariant: 'select' },
          },
          {
            id: 'pricing.taxInclusive',
            accessorKey: 'pricing.taxInclusive',
            header: 'Tax Inclusive',
            meta: { filterVariant: 'select' },
          },
          {
            id: 'pricing.discountType',
            accessorKey: 'pricing.discountType',
            header: 'Discount Type',
            meta: { filterVariant: 'select' },
          },
        ],
      },
      {
        id: 'guides',
        header: 'Guides',
        columns: [
          {
            id: 'guides.familyName',
            accessorKey: 'guides.familyName',
            header: 'Family Name',
            meta: { filterVariant: 'text' },
          },
          {
            id: 'guides.givenName',
            accessorKey: 'guides.givenName',
            header: 'Given Name',
            meta: { filterVariant: 'text' },
          },
          {
            id: 'guides.email',
            accessorKey: 'guides.email',
            header: 'Email',
            meta: { filterVariant: 'text' },
          },
        ],
      },
    ],
    [],
  );

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 20,
  });
  const [globalFilter, setGlobalFilter] = useState('');
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const queryParams = buildQueryParams(columnFilters);
  const sort = getSortString(sorting);

  const { data, isError, isLoading, isFetching } = useGetAdminProductsQuery({
    pagination,
    queryParams,
    sort,
    globalFilter,
  });
  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle translate="yes">Product List</CardTitle>
        </CardHeader>
        <CardContent>
          <MunTable
            data={data?.data}
            columns={columns}
            isError={isError}
            isLoading={isLoading || isFetching}
            pagination={pagination}
            setPagination={setPagination}
            columnFilters={columnFilters}
            setColumnFilters={setColumnFilters}
            sorting={sorting}
            setSorting={setSorting}
            globalFilter={globalFilter}
            setGlobalFilter={setGlobalFilter}
            pin={{
              right: ['basicInfo.title'],
            }}
            isSplit={true}
          />
        </CardContent>
      </Card>
    </section>
  );
};

export default AdminProductList;
