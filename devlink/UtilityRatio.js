"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { UtilityImage } from "./UtilityImage";

export function UtilityRatio({
  as: _Component = _Builtin.Block,
  image = "",
  ratio = "Auto",
}) {
  const _styleVariantMap = {
    Auto: "",
    "1:1": "w-variant-0012e941-0e46-cfd7-b301-16793854f4a2",
    "4:3": "w-variant-1e0d54b1-0bf9-36f6-2378-c60af5a75fd8",
    "3:2": "w-variant-a9e529aa-1787-6c21-010f-ccb55a914453",
    "16:9": "w-variant-ec5e0c86-651c-a910-9ab0-d8e4780cfe42",
    "16:7": "w-variant-cc081723-cccc-a6c2-db8d-39d608f00636",
    "2:3": "w-variant-a9383059-8676-198c-8c38-197873f6963e",
  };

  const _activeStyleVariant = _styleVariantMap[ratio];
  return (
    <_Component className={`ratio ${_activeStyleVariant}`} tag="div">
      <UtilityImage image={image} />
    </_Component>
  );
}
