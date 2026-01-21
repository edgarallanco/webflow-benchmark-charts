"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function UtilityContainer({
  as: _Component = _Builtin.Block,
  variant = "base",
  grid,
}) {
  const _styleVariantMap = {
    base: "",
    large: "w-variant-8910090c-10fd-c3b2-bc02-c55632bc9fb8",
  };

  const _activeStyleVariant = _styleVariantMap[variant];
  return (
    <_Component className={`container ${_activeStyleVariant}`} tag="div">
      {grid}
    </_Component>
  );
}
