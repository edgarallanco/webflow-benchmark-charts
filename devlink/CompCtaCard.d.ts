import * as React from "react";
import * as Types from "./types";

declare function CompCtaCard(props: {
  as?: React.ElementType;
  contentBigTitleVisibility?: Types.Visibility.VisibilityConditions;
  contentTitle?: React.ReactNode;
  contentSmallTitleVisibility?: Types.Visibility.VisibilityConditions;
  contentParagraphText?: React.ReactNode;
  linkLinkVisibility?: Types.Visibility.VisibilityConditions;
  linkButtonVisibility?: Types.Visibility.VisibilityConditions;
  linkButtonText?: React.ReactNode;
  linkButtonLink?: Types.Basic.Link;
}): React.JSX.Element;
