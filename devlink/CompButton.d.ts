import * as React from "react";
import * as Types from "./types";

declare function CompButton(props: {
  as?: React.ElementType;
  buttonVariant?:
    | "Primary-lg"
    | "Secondary-lg"
    | "Primary-sm"
    | "Secondary-sm"
    | "Tertiary-lg"
    | "Tertiary-sm";
  linkVisibility?: Types.Visibility.VisibilityConditions;
  buttonElementVisibility?: Types.Visibility.VisibilityConditions;
  buttonLink?: Types.Basic.Link;
  buttonText?: React.ReactNode;
  buttonIconVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
