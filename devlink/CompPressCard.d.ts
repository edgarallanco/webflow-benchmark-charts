import * as React from "react";
import * as Types from "./types";

declare function CompPressCard(props: {
  as?: React.ElementType;
  cardColor?: "bg-pearl" | "bg-bone" | "bg-white" | "bg-green";
  contentEyebrowText?: React.ReactNode;
  contentTitle?: React.ReactNode;
  linkButtonText?: React.ReactNode;
  contentDateVisibility?: Types.Visibility.VisibilityConditions;
  linkButtonLink?: Types.Basic.Link;
  contentDate?: React.ReactNode;
  linkButtonVariant?:
    | "Primary-lg"
    | "Secondary-lg"
    | "Primary-sm"
    | "Secondary-sm"
    | "Tertiary-lg"
    | "Tertiary-sm";
  contentSubtextVisibility?: Types.Visibility.VisibilityConditions;
  contentSubtextText?: React.ReactNode;
  linkButtonIconVisibility?: Types.Visibility.VisibilityConditions;
  linkPodcastButtonVisibility?: Types.Visibility.VisibilityConditions;
  linkArticleButtonVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
