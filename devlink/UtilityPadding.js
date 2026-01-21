"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function UtilityPadding({
  as: _Component = _Builtin.Block,
  variant = "padd-0",
}) {
  const _styleVariantMap = {
    "padd-0": "",
    "padd-M": "w-variant-37d2a443-7703-3d40-616f-a9ef2e83d104",
    "padd-L": "w-variant-9095c12f-08d7-d1b2-39c9-88e13ce2a464",
    "padd-XL": "w-variant-a0b078fa-5a61-27c7-b05e-35e5ebca4e53",
  };

  const _activeStyleVariant = _styleVariantMap[variant];
  return <_Component className={`padding ${_activeStyleVariant}`} tag="div" />;
}
