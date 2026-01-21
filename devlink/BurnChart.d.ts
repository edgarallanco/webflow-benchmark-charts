import * as React from "react";
import * as Types from "./types";

declare function BurnChart(props: {
  as?: React.ElementType;
  initialMetric?: "multiple" | "rule-of-40" | "operating-margin";
  showExpandIcon?: Types.Boolean.Boolean;
}): React.JSX.Element;
