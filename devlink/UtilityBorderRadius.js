"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { UtilityRatio } from "./UtilityRatio";

export function UtilityBorderRadius({
  as: _Component = _Builtin.Block,
  borderRadius = "br-0",
  image = "https://cdn.prod.website-files.com/692f28f1d17b8ec4f8005e36/692f28f4d17b8ec4f8005f91_3200eb4bce6578d74c6505b64ad2b5bf_placeholder.png",
  ratio = "br-0",
}) {
  const _styleVariantMap = {
    "br-0": "",
    "br-xs": "w-variant-495815c1-d1f9-bc3e-d919-2d80d1197859",
    "br-s": "w-variant-fd7d34e8-4a0c-a7ca-dab2-666c1fd04b7b",
    "br-m": "w-variant-38f2fa53-fd16-1da0-0c31-7b3a5360122e",
    "br-l": "w-variant-31592221-6c23-1eae-c401-e04c836af72c",
  };

  const _activeStyleVariant = _styleVariantMap[borderRadius];
  return (
    <_Component className={`radius ${_activeStyleVariant}`} tag="div">
      <UtilityRatio image={image} ratio={ratio} />
    </_Component>
  );
}
