"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function UtilityDivider({
  as: _Component = _Builtin.Block,
  variant = "Charcoal",
}) {
  const _styleVariantMap = {
    Charcoal: "",
    Dust: "w-variant-e431020c-1d8e-02f1-a210-5431f6da298a",
    White: "w-variant-4d6c2eb3-8e0c-5d72-7d53-4c20ac9b0870",
    Green: "w-variant-0193792f-1804-5870-8b7f-7f24f6a300cf",
  };

  const _activeStyleVariant = _styleVariantMap[variant];
  return <_Component className={`divider ${_activeStyleVariant}`} tag="div" />;
}
