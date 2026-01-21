import * as React from "react";
import * as Types from "./types";

declare function CompTestimonialCard(props: {
  as?: React.ElementType;
  variant?: "Blue" | "Soil" | "Green";
  mainText?: React.ReactNode;
  logo?: Types.Asset.Image;
  authorName?: React.ReactNode;
  authorRole?: React.ReactNode;
}): React.JSX.Element;
