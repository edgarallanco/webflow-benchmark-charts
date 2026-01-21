import * as React from "react";
import * as Types from "./types";

declare function CompNewsCardStyle1(props: {
  as?: React.ElementType;
  variant?: "On-light" | "On-dark";
  buttonVariant?:
    | "Primary-lg"
    | "Secondary-lg"
    | "Primary-sm"
    | "Secondary-sm"
    | "Tertiary-lg"
    | "Tertiary-sm";
  buttonLink?: Types.Basic.Link;
  buttonText?: React.ReactNode;
  buttonVisibility?: Types.Visibility.VisibilityConditions;
  visualThumbnailImage?: Types.Asset.Image;
  contentLabelText?: React.ReactNode;
  contentTitleText?: React.ReactNode;
  contentSubText?: React.ReactNode;
  contentDateVisibility?: Types.Visibility.VisibilityConditions;
  contentDate?: React.ReactNode;
  visualIcon?: Types.Asset.Image;
  visualIconVisibility?: Types.Visibility.VisibilityConditions;
  visualIconImage?: Types.Asset.Image;
  advancedNestedListIdentifier?: Types.Builtin.Text;
}): React.JSX.Element;
