"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function UtilityRadius({
  as: _Component = _Builtin.Block,
  variant = "br-0",
}) {
  const _styleVariantMap = {
    "br-0": "",
    "br-xs": "w-variant-8b83fdbe-e909-ae30-78cf-32aff0814c14",
    "br-s": "w-variant-653c70f5-71c4-2845-c513-a7a84f34ede9",
    "br-m": "w-variant-f0cf3689-fddc-a608-b515-73a18d97b7c4",
    "br-l": "w-variant-a39fb370-a25a-d15c-e8ee-6073a1d66224",
  };

  const _activeStyleVariant = _styleVariantMap[variant];
  return <_Component className={`radius ${_activeStyleVariant}`} tag="div" />;
}
