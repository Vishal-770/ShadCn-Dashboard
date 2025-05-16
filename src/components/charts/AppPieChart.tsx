"use client";

import React from "react";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";
import { PieChart, Pie, Cell } from "recharts";

const desktopData = [
  { month: "january", desktop: 186, fill: "var(--color-chart-1)" },
  { month: "february", desktop: 305, fill: "var(--color-chart-2)" },
  { month: "march", desktop: 237, fill: "var(--color-chart-3)" },
  { month: "april", desktop: 173, fill: "var(--color-chart-4)" },
  { month: "may", desktop: 209, fill: "var(--color-chart-5)" },
];

const mobileData = [
  { month: "january", mobile: 80, fill: "var(--color-chart-1)" },
  { month: "february", mobile: 200, fill: "var(--color-chart-2)" },
  { month: "march", mobile: 120, fill: "var(--color-chart-3)" },
  { month: "april", mobile: 190, fill: "var(--color-chart-4)" },
  { month: "may", mobile: 130, fill: "var(--color-chart-5)" },
];

const chartConfig = {
  visitors: { label: "Visitors" },
  desktop: { label: "Desktop" },
  mobile: { label: "Mobile" },
  january: { label: "January", color: "hsl(var(--chart-1))" },
  february: { label: "February", color: "hsl(var(--chart-2))" },
  march: { label: "March", color: "hsl(var(--chart-3))" },
  april: { label: "April", color: "hsl(var(--chart-4))" },
  may: { label: "May", color: "hsl(var(--chart-5))" },
} satisfies ChartConfig;

const AppPieChart = () => {
  return (
    <div>
      <h1 className="mb-7.5">Total Purchases</h1>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <PieChart>
          <ChartTooltip
            content={
              <ChartTooltipContent
                labelKey="visitors"
                nameKey="month"
                indicator="line"
                labelFormatter={(_, payload) =>
                  chartConfig[payload?.[0].dataKey as keyof typeof chartConfig]
                    ?.label
                }
              />
            }
          />
          <Pie
            data={desktopData}
            dataKey="desktop"
            outerRadius={60}
            labelLine={false}
          >
            {desktopData.map((entry, index) => (
              <Cell key={`desktop-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <Pie
            data={mobileData}
            dataKey="mobile"
            innerRadius={70}
            outerRadius={90}
            label={({ percent, index }) =>
              `${mobileData[index].month}: ${(percent * 100).toFixed(0)}%`
            }
            labelLine={false}
          >
            {mobileData.map((entry, index) => (
              <Cell key={`mobile-${index}`} fill={entry.fill} />
            ))}
          </Pie>
        </PieChart>
      </ChartContainer>
    </div>
  );
};

export default AppPieChart;
