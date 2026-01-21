import * as React from "react";
import * as Types from "./types";

declare function CompVideo(props: {
  as?: React.ElementType;
  videoPoster?: Types.Builtin.Text;
  videoPosterImage?: Types.Asset.Image;
  videoSourceLink?: Types.Builtin.Text;
}): React.JSX.Element;
