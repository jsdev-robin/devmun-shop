'use client';

import React, { useMemo, useState } from 'react';
import {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
  SortingState,
} from '@tanstack/react-table';
import { dummyPeople, Person } from './data/dummyPerson';
import { ArrowDown, ArrowUp, X } from 'lucide-react';
import IndeterminateCheckbox from '@repo/ui/components/indeterminate-checkbox';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/card';
import MunGrid from '@repo/ui/data-grid/mun-grid';
import RowDragHandle from '@repo/ui/components/row-drag-handle';

const SellerProductList = () => {
  const columns = useMemo<ColumnDef<Person, unknown>[]>(
    () => [
      {
        accessorFn: (_row, index) => index + 1,
        cell: ({ row }) => row.index + 1,
        id: 'rowNumber',
        header: 'Row',
        size: 54,
        maxSize: 54,
      },
      {
        id: 'drag-handle',
        cell: ({ row }) => <RowDragHandle rowId={row.id} />,
        size: 36,
      },
      {
        id: 'pin',
        header: () => 'Pin',
        cell: ({ row }) =>
          row.getIsPinned() ? (
            <button
              title="Unpin"
              className="text-red-500"
              onClick={() => row.pin(false)}
            >
              <X size={16} />
            </button>
          ) : (
            <div className="flex gap-2">
              <button title="Pin row top" onClick={() => row.pin('top')}>
                <ArrowUp size={16} />
              </button>
              <button title="Pin row bottom" onClick={() => row.pin('bottom')}>
                <ArrowDown size={16} />
              </button>
            </div>
          ),
        size: 60,
        maxSize: 60,
      },
      {
        id: 'select',
        header: ({ table }) => (
          <div>
            <IndeterminateCheckbox
              checked={table.getIsAllRowsSelected()}
              indeterminate={table.getIsSomeRowsSelected()}
              onChange={table.getToggleAllRowsSelectedHandler()}
              aria-label="Select all"
            />
          </div>
        ),
        cell: ({ row }) => (
          <div>
            <IndeterminateCheckbox
              checked={row.getIsSelected()}
              disabled={!row.getCanSelect()}
              indeterminate={row.getIsSomeSelected()}
              onChange={row.getToggleSelectedHandler()}
              aria-label="Select row"
            />
          </div>
        ),
        size: 36,
        maxSize: 36,
      },
      {
        accessorKey: 'firstName',
        id: 'firstName',
        cell: (info) => info.getValue(),
        meta: {
          filterVariant: 'text',
        },
      },
      {
        accessorFn: (row) => row.lastName,
        accessorKey: 'lastName',
        id: 'lastName',
        cell: (info) => info.getValue(),
        header: () => <i>Last Name</i>,
        meta: {
          filterVariant: 'text',
        },
      },
      {
        accessorFn: (row) => `${row.firstName} ${row.lastName}`,
        accessorKey: 'fullName',
        id: 'fullName',
        header: 'Full Name',
        cell: (info) => info.getValue(),
        meta: {
          filterVariant: 'text',
        },
      },
      {
        accessorKey: 'age',
        id: 'age',
        header: () => 'Age',
        meta: {
          filterVariant: 'range',
        },
      },
      {
        accessorKey: 'visits',
        id: 'visits',
        header: () => <span>Visits</span>,
        meta: {
          filterVariant: 'range',
        },
      },
      {
        accessorKey: 'status',
        id: 'status',
        header: 'Status',
        meta: {
          filterVariant: 'select',
        },
      },
      {
        accessorKey: 'progress',
        id: 'progress',
        header: 'Progress',
        meta: {
          filterVariant: 'text',
        },
      },
      {
        accessorKey: 'rank',
        header: 'Profile rank',
        id: 'rank',
        meta: {
          filterVariant: 'text',
        },
      },
      {
        accessorKey: 'phone',
        header: 'Profile phone',
        id: 'phone',
        meta: {
          filterVariant: 'text',
        },
      },
      {
        accessorKey: 'createdAt',
        header: 'CreatedAt',
        id: 'createdAt',
        meta: {
          filterVariant: 'dateRange',
        },
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

  const payload = {
    data: dummyPeople,
    total: 10,
    page: 10,
    pageSize: 10,
  };

  return (
    <section>
      <div className="container">
        <Card>
          <CardHeader>
            <CardTitle translate="yes">Product List</CardTitle>
          </CardHeader>
          <CardContent>
            <MunGrid
              data={payload ?? []}
              columns={columns}
              pagination={pagination}
              setPagination={setPagination}
              columnFilters={columnFilters}
              setColumnFilters={setColumnFilters}
              sorting={sorting}
              setSorting={setSorting}
              globalFilter={globalFilter}
              setGlobalFilter={setGlobalFilter}
              isError={false}
              isLoading={false}
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SellerProductList;
