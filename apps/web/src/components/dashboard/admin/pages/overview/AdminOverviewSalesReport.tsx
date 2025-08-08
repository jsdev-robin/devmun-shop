'use client';

import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
} from 'recharts';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@repo/ui/components/chart';
import { Button } from '@repo/ui/components/button';

const data = [
  {
    revenue: 10400,
    subscription: 40,
  },
  {
    revenue: 14405,
    subscription: 90,
  },
  {
    revenue: 9400,
    subscription: 200,
  },
  {
    revenue: 8200,
    subscription: 278,
  },
  {
    revenue: 7000,
    subscription: 89,
  },
  {
    revenue: 9600,
    subscription: 239,
  },
  {
    revenue: 11244,
    subscription: 78,
  },
  {
    revenue: 26475,
    subscription: 89,
  },
];

const chartConfig = {
  revenue: {
    label: 'Revenue',
    color: 'var(--primary)',
  },
  subscription: {
    label: 'Subscriptions',
    color: 'var(--primary)',
  },
} satisfies ChartConfig;

const data2 = [
  {
    average: 400,
    today: 240,
    day: 'Monday',
  },
  {
    average: 300,
    today: 139,
    day: 'Tuesday',
  },
  {
    average: 200,
    today: 980,
    day: 'Wednesday',
  },
  {
    average: 278,
    today: 390,
    day: 'Thursday',
  },
  {
    average: 189,
    today: 480,
    day: 'Friday',
  },
  {
    average: 239,
    today: 380,
    day: 'Saturday',
  },
  {
    average: 349,
    today: 430,
    day: 'Sunday',
  },
];

const chartConfig2 = {
  today: {
    label: 'Today',
    color: 'var(--primary)',
  },
  average: {
    label: 'Average',
    color: 'var(--primary)',
  },
} satisfies ChartConfig;

const AdminOverviewSalesReport = () => {
  return (
    <section>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        <Card>
          <CardHeader>
            <CardDescription>Total Revenue</CardDescription>
            <CardTitle className="text-3xl">$15,231.89</CardTitle>
            <CardDescription>+20.1% from last month</CardDescription>
          </CardHeader>
          <CardContent className="pb-0">
            <ChartContainer config={chartConfig} className="h-[80px] w-full">
              <LineChart
                data={data}
                margin={{
                  top: 5,
                  right: 10,
                  left: 10,
                  bottom: 0,
                }}
              >
                <Line
                  type="monotone"
                  strokeWidth={2}
                  dataKey="revenue"
                  stroke="var(--color-revenue)"
                  activeDot={{
                    r: 6,
                  }}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="pb-0">
          <CardHeader>
            <CardDescription>Subscriptions</CardDescription>
            <CardTitle className="text-3xl">+2,350</CardTitle>
            <CardDescription>+180.1% from last month</CardDescription>
            <CardAction>
              <Button variant="ghost" size="sm">
                View More
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent className="mt-auto max-h-[124px] flex-1 p-0">
            <ChartContainer config={chartConfig} className="size-full">
              <AreaChart
                data={data}
                margin={{
                  left: 0,
                  right: 0,
                }}
              >
                <Area
                  dataKey="subscription"
                  fill="var(--color-subscription)"
                  fillOpacity={0.05}
                  stroke="var(--color-subscription)"
                  strokeWidth={2}
                  type="monotone"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <div className="col-span-full xl:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Exercise Minutes</CardTitle>
              <CardDescription>
                Your exercise minutes are ahead of where you normally are.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={chartConfig2}
                className="w-full md:h-[200px]"
              >
                <LineChart
                  accessibilityLayer
                  data={data2}
                  margin={{
                    top: 5,
                    right: 10,
                    left: 16,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="day"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <Line
                    type="monotone"
                    dataKey="today"
                    strokeWidth={2}
                    stroke="var(--color-today)"
                    dot={{
                      fill: 'var(--color-today)',
                    }}
                    activeDot={{
                      r: 5,
                    }}
                  />
                  <Line
                    type="monotone"
                    strokeWidth={2}
                    dataKey="average"
                    stroke="var(--color-average)"
                    strokeOpacity={0.5}
                    dot={{
                      fill: 'var(--color-average)',
                      opacity: 0.5,
                    }}
                    activeDot={{
                      r: 5,
                    }}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AdminOverviewSalesReport;
