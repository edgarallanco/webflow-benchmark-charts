"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function CompPaddingSectionY({
  as: _Component = _Builtin.Block,
  variant = "0",
}) {
  const _styleVariantMap = {
    0: "",
    12: "w-variant-a28a6a65-1216-9380-3dc5-1acf8d7c0120",
    "padd-M": "w-variant-47b81e50-4b76-4fdf-37b2-101676aafdd8",
    "padd-L": "w-variant-c37f9c4a-051d-694e-9363-172d6c4c12cc",
    40: "w-variant-f915a7bd-d9f8-1722-1201-7393fff9d6cf",
    "padd-XL-sp-L": "w-variant-08acb86a-d8e0-9901-54af-bc9ea51d9c68",
    80: "w-variant-eba97e46-dfcf-571f-38d7-c84b254fa6f7",
    96: "w-variant-89b418c4-00cb-6b69-79ee-27842b9d8ad4",
    120: "w-variant-91d8ce25-15a0-e173-6814-9b126280c688",
  };

  const _activeStyleVariant = _styleVariantMap[variant];
  return (
    <_Component className={`padding-y ${_activeStyleVariant}`} tag="div" />
  );
}
