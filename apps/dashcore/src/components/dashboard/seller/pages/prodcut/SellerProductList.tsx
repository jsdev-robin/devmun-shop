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
import { useGetSellerProductsQuery } from '../../../../../lib/features/services/dashboard/seller/sellerProductApi';
import { IProduct } from '@repo/ui/types/product-types';
import MunTable from '@repo/ui/data-grid/mun-table';
import { Edit, Eye, Plus, Trash } from 'lucide-react';
import RowPin from '@repo/ui/components/row-pin';
import { Badge } from '@repo/ui/components/badge';
import { buttonVariants } from '@repo/ui/components/button';
import Link from 'next/link';
import { cn } from '@repo/ui/libs/utils';

const SellerProductList = () => {
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
        header: 'Actions',
        cell: () => (
          <div className="flex items-center gap-4">
            <Badge variant="outline">
              <Eye />
            </Badge>
            <Badge variant="outline">
              <Edit />
            </Badge>
            <Badge>
              <Trash />
            </Badge>
          </div>
        ),
        size: 140,
        maxSize: 140,
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
            id: 'basicInfo.description',
            accessorKey: 'basicInfo.description',
            header: 'Description',
            meta: { filterVariant: 'text' },
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
        id: 'inventory',
        header: 'Inventory',
        columns: [
          {
            id: 'inventory.sku',
            accessorKey: 'inventory.sku',
            header: 'SKU',
            meta: { filterVariant: 'text' },
          },
          {
            id: 'inventory.barcode',
            accessorKey: 'inventory.barcode',
            header: 'Barcode',
            meta: { filterVariant: 'text' },
          },
          {
            id: 'inventory.batchNumber',
            accessorKey: 'inventory.batchNumber',
            header: 'Batch Number',
            meta: { filterVariant: 'text' },
          },
          {
            id: 'inventory.warehouseLocation',
            accessorKey: 'inventory.warehouseLocation',
            header: 'Warehouse Location',
            meta: { filterVariant: 'text' },
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
          {
            id: 'pricing.discountValue',
            accessorKey: 'pricing.discountValue',
            header: 'Discount Value',
            meta: { filterVariant: 'number' },
          },
          {
            id: 'pricing.discountStartDate',
            accessorKey: 'pricing.discountStartDate',
            header: 'Discount Start',
            meta: { filterVariant: 'date' },
          },
          {
            id: 'pricing.discountEndDate',
            accessorKey: 'pricing.discountEndDate',
            header: 'Discount End',
            meta: { filterVariant: 'date' },
          },
        ],
      },
      {
        id: 'categories',
        header: 'Categories',
        columns: [
          {
            id: 'categories.mainCategory',
            accessorKey: 'categories.mainCategory',
            header: 'Main Category',
            meta: { filterVariant: 'select' },
          },
          {
            id: 'categories.subCategory',
            accessorKey: 'categories.subCategory',
            header: 'Sub Category',
            meta: { filterVariant: 'select' },
          },
          {
            id: 'categories.tertiaryCategory',
            accessorKey: 'categories.tertiaryCategory',
            header: 'Tertiary Category',
            meta: { filterVariant: 'select' },
          },
          {
            id: 'categories.productTags',
            accessorKey: 'categories.productTags',
            header: 'Product Tags',
            cell: ({ getValue }) =>
              (getValue() as string[] | undefined)?.join(', ') ?? '',
            meta: { filterVariant: 'text' },
          },
        ],
      },
      {
        id: 'variants',
        header: 'Variants',
        columns: [
          {
            id: 'variants.count',
            accessorFn: (row) => row.variants?.length ?? 0,
            header: 'Variants Count',
            meta: { filterVariant: 'number' },
          },
        ],
      },
      {
        id: 'seo',
        header: 'SEO',
        columns: [
          {
            id: 'seo.metaTitle',
            accessorKey: 'seo.metaTitle',
            header: 'Meta Title',
            meta: { filterVariant: 'text' },
          },
          {
            id: 'seo.metaDescription',
            accessorKey: 'seo.metaDescription',
            header: 'Meta Description',
            meta: { filterVariant: 'text' },
          },
          {
            id: 'seo.canonicalUrl',
            accessorKey: 'seo.canonicalUrl',
            header: 'Canonical URL',
            meta: { filterVariant: 'text' },
          },
          {
            id: 'seo.slug',
            accessorKey: 'seo.slug',
            header: 'Slug',
            meta: { filterVariant: 'text' },
          },
        ],
      },
      {
        id: 'status',
        accessorKey: 'status',
        header: 'Status',
        meta: { filterVariant: 'select' },
      },
      {
        id: 'isFreeShipping',
        accessorKey: 'isFreeShipping',
        header: 'Free Shipping',
        cell: (info) => (info.getValue() ? 'Yes' : 'No'),
        meta: { filterVariant: 'select' },
      },
      {
        id: 'isAdult',
        accessorKey: 'isAdult',
        header: 'Adult Product',
        cell: (info) => (info.getValue() ? 'Yes' : 'No'),
        meta: { filterVariant: 'select' },
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
          {
            id: 'guides.avatar.url',
            accessorKey: 'guides.avatar.url',
            header: 'Avatar URL',
            cell: (info) => (
              <a
                href={info.getValue()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                View
              </a>
            ),
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

  const { data, isError, isLoading, isFetching } = useGetSellerProductsQuery({
    pagination,
    queryParams,
    sort,
    globalFilter,
  });
  return (
    <section>
      <div className="container">
        <div className="space-y-4">
          <div className="flex items-center justify-end">
            <Link
              href="/dashboard/seller/product/create/v1"
              className={cn(buttonVariants())}
            >
              <Plus />
              Add new product
            </Link>
          </div>
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
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SellerProductList;
