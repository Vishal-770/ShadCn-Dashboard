"use client";

import AppBarChart from "@/components/charts/AppBarChart";
import AreaChart from "@/components/charts/AppAreaChart";
import AppPieChart from "@/components/charts/AppPieChart";
import AppLineChart from "@/components/AppLineChart";

const Page = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-4 p-4">
      {/* First row: 3 equal charts */}
      <div className="bg-primary-foreground rounded-2xl p-4">
        <AppBarChart />
      </div>
      <div className="bg-primary-foreground rounded-2xl p-4">
        <AreaChart />
      </div>
      <div className="bg-primary-foreground rounded-2xl p-4">
        <AppPieChart />
      </div>

      {/* Second row: full-width chart (spans all columns) */}
      <div className="bg-primary-foreground rounded-2xl p-4 col-span-1 sm:col-span-3">
        <AppLineChart />
      </div>
    </div>
  );
};

export default Page;
