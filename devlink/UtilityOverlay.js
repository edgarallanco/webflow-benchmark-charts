"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function UtilityOverlay({
  as: _Component = _Builtin.Block,
  variant = "Gradient-0",
}) {
  const _styleVariantMap = {
    "Gradient-0": "",
    "Gradient-1": "w-variant-b1ed0f74-4e36-c923-a413-5c2a41738fc1",
    "Gradient-2": "w-variant-93fa72e7-5446-3661-5be0-c43312e9a8ec",
  };

  const _activeStyleVariant = _styleVariantMap[variant];
  return <_Component className={`overlay ${_activeStyleVariant}`} tag="div" />;
}
