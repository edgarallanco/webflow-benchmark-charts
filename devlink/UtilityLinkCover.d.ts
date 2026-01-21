import * as React from "react";
import * as Types from "./types";

declare function UtilityLinkCover(props: {
  as?: React.ElementType;
  linkVisibility?: Types.Visibility.VisibilityConditions;
  /** if clickeable element is a slider arrow, or modal trigger, make this visible.*/
  buttonVisibility?: Types.Visibility.VisibilityConditions;
  buttonLinkText?: React.ReactNode;
  link?: Types.Basic.Link;
}): React.JSX.Element;
