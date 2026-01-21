import * as React from "react";
import * as Types from "./types";

declare function BenchmarkCharts(props: {
  as?: React.ElementType;
  initialRevenueSetup?: "all" | "range";
  initialRevenue?: number;
  showControls?: Types.Boolean.Boolean;
}): React.JSX.Element;
