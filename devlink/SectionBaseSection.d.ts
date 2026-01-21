import * as React from "react";

declare function SectionBaseSection(props: {
  as?: React.ElementType;
  layoutPaddingTop?:
    | "0"
    | "12"
    | "padd-M"
    | "padd-L"
    | "40"
    | "padd-XL-sp-L"
    | "80"
    | "96"
    | "120";
  layoutPaddingBottom?:
    | "0"
    | "12"
    | "padd-M"
    | "padd-L"
    | "40"
    | "padd-XL-sp-L"
    | "80"
    | "96"
    | "120";
  /** Use large for card sections*/
  layoutContainerSize?: "base" | "large";
}): React.JSX.Element;
