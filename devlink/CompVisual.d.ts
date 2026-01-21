import * as React from "react";
import * as Types from "./types";

declare function CompVisual(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  objectFit?: "fill" | "cover" | "contain";
  ratio?: "Auto" | "1:1" | "4:3" | "3:2" | "16:9" | "16:7" | "2:3";
  borderRadius?: "br-0" | "br-xs" | "br-s" | "br-m" | "br-l";
  overlayGradientOverlay?: "Gradient-0" | "Gradient-1" | "Gradient-2";
  overlayBlur?: "bl-0" | "bl-xs" | "bl-s" | "bl-m" | "bl-l";
}): React.JSX.Element;
