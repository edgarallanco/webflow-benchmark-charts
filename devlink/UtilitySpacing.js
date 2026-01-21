"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function UtilitySpacing({
  as: _Component = _Builtin.Block,
  variant = "sp-0",
}) {
  const _styleVariantMap = {
    "sp-0": "",
    "sp-xxs": "w-variant-763ce9e9-9441-8156-0866-3e5b232e1b17",
    "sp-xs": "w-variant-83712c2d-2a61-4d2e-1117-299a9ccc5da6",
    "sp-s": "w-variant-87d630b5-29f8-e39f-ac61-d41375f41eae",
    "sp-m": "w-variant-6f7b0296-9ee4-8003-c953-81ff3adc4efa",
    "sp-l": "w-variant-77619072-312e-2569-86c2-a35a21ebaaaa",
    "sp-xl": "w-variant-f97b33a0-1091-a819-82e8-68c7b66b5578",
    "sp-xxl": "w-variant-335f8957-3a72-f2e3-3e67-a011764a1796",
    "sp-3xl": "w-variant-316410d4-268d-535f-b83d-15b8630f165d",
  };

  const _activeStyleVariant = _styleVariantMap[variant];
  return <_Component className={`spacing ${_activeStyleVariant}`} tag="div" />;
}
