import * as React from "react";
import * as Types from "./types";

declare function CompPhotoCard(props: {
  as?: React.ElementType;
  overlayVisualLogoVisibility?: Types.Visibility.VisibilityConditions;
  overlayVisualLogo?: Types.Asset.Image;
  overlayVisualImage?: Types.Asset.Image;
}): React.JSX.Element;
