import * as React from "react";
import * as Types from "./types";

declare function CompFounderCard(props: {
  as?: React.ElementType;
  contentCardCompanyName?: React.ReactNode;
  contentCardFounder?: React.ReactNode;
  contentCardText?: React.ReactNode;
  contentCardLink?: Types.Basic.Link;
  contentCardFounder2Visibility?: Types.Visibility.VisibilityConditions;
  contentCardFounder2?: React.ReactNode;
}): React.JSX.Element;
