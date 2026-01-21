import * as React from "react";
import * as Types from "./types";

declare function UtilityContainer(props: {
  as?: React.ElementType;
  variant?: "base" | "large";
  grid?: React.ReactNode;
}): React.JSX.Element;
