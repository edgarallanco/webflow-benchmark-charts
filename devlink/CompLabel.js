"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function CompLabel({
  as: _Component = _Builtin.Block,
  variant = "Small-bone",
  text = "Label",
}) {
  const _styleVariantMap = {
    "Small-bone": "",
    "Sml-green": "w-variant-cfd2ccfd-9d16-7eed-1fb3-45b802efa7e1",
    "Lg-bone": "w-variant-ce9e8225-46a9-45fc-0981-ff453805fe52",
    "Lg-green": "w-variant-a045e858-6354-d830-771c-b9180b089324",
    "Txt-green": "w-variant-11b9b8b8-70c1-52df-42a1-30ef8b121cb3",
  };

  const _activeStyleVariant = _styleVariantMap[variant];
  return (
    <_Component className={`label ${_activeStyleVariant}`} tag="div">
      <_Builtin.Block tag="div">{text}</_Builtin.Block>
    </_Component>
  );
}
