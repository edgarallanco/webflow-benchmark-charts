import * as React from "react";
import * as Types from "./types";

declare function UtilityBorderRadius(props: {
  as?: React.ElementType;
  borderRadius?: "br-0" | "br-xs" | "br-s" | "br-m" | "br-l";
  image?: Types.Asset.Image;
  ratio?: "Auto" | "1:1" | "4:3" | "3:2" | "16:9" | "16:7" | "2:3";
}): React.JSX.Element;
