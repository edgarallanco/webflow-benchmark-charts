import * as React from "react";
import * as Types from "./types";

declare function CompMetricsCard(props: {
  as?: React.ElementType;
  variant?: "bg-bone" | "bg-pearl" | "bg-white";
  image?: Types.Asset.Image;
  title?: React.ReactNode;
  paragraph?: React.ReactNode;
}): React.JSX.Element;
