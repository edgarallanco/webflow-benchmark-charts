"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { UtilityBorderRadius } from "./UtilityBorderRadius";
import { UtilityOverlay } from "./UtilityOverlay";
import { UtilityBlur } from "./UtilityBlur";

export function CompVisual({
  as: _Component = _Builtin.Block,
  image = "https://cdn.prod.website-files.com/692f28f1d17b8ec4f8005e36/692f28f4d17b8ec4f8005f91_3200eb4bce6578d74c6505b64ad2b5bf_placeholder.png",
  objectFit = "fill",
  ratio = "fill",
  borderRadius = "fill",
  overlayGradientOverlay = "fill",
  overlayBlur = "fill",
}) {
  const _styleVariantMap = {
    fill: "",
    cover: "w-variant-71177c4a-135b-b7c1-10e8-d7281c0e0e72",
    contain: "w-variant-adb04400-f407-5e67-adaa-ffa4d31a976c",
  };

  const _activeStyleVariant = _styleVariantMap[objectFit];
  return (
    <_Component className={`visual ${_activeStyleVariant}`} tag="div">
      <UtilityBorderRadius
        image={image}
        ratio={ratio}
        borderRadius={borderRadius}
      />
      <UtilityOverlay variant={overlayGradientOverlay} />
      <UtilityBlur variant={overlayBlur} />
    </_Component>
  );
}
