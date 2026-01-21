import * as React from "react";
import * as Types from "./types";

declare function UtilityRatio(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  ratio?: "Auto" | "1:1" | "4:3" | "3:2" | "16:9" | "16:7" | "2:3";
}): React.JSX.Element;
