"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function UtilityBlur({
  as: _Component = _Builtin.Block,
  variant = "bl-0",
}) {
  const _styleVariantMap = {
    "bl-0": "",
    "bl-xs": "w-variant-9adba6ff-bd3a-0e13-1f45-1ee2d31ad67a",
    "bl-s": "w-variant-3886ff98-1176-e5a3-c77c-f485c7cf8730",
    "bl-m": "w-variant-9b60ac80-7f51-4ba7-62aa-d7e5edbf8bd7",
    "bl-l": "w-variant-3003efed-941f-0140-228d-e62055dc7e61",
  };

  const _activeStyleVariant = _styleVariantMap[variant];
  return <_Component className={`blur ${_activeStyleVariant}`} tag="div" />;
}
