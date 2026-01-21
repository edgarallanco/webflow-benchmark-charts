"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { UtilitySpacing } from "./UtilitySpacing";

export function CompMetricsCard({
  as: _Component = _Builtin.Block,
  variant = "bg-bone",
  image = "https://cdn.prod.website-files.com/692f28f1d17b8ec4f8005e36/695118498bbb068588e3e45b_Frame%202147230996.svg",
  title = "Growth",
  paragraph = "Lorem ipsum dolor sit amet consectetur. Vulputate risus diam mauris lorem vitae quis consectetur imperdiet elit.",
}) {
  const _styleVariantMap = {
    "bg-bone": "",
    "bg-pearl": "w-variant-b4384c85-a73a-2c68-63cb-be9b184dfc00",
    "bg-white": "w-variant-d3a1fd1e-8820-5fae-65cf-228305d74be9",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={`metrics_component ${_activeStyleVariant}`}
      tag="div"
    >
      <_Builtin.Image
        className={`metrics_component-icon ${_activeStyleVariant}`}
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src={image}
      />
      <UtilitySpacing variant="sp-l" />
      <_Builtin.Block
        className={`text-xl text-family-saans text-weight-bold text-color-black ${_activeStyleVariant}`}
        tag="div"
      >
        {title}
      </_Builtin.Block>
      <UtilitySpacing variant="sp-xs" />
      <_Builtin.Block className={`text-s ${_activeStyleVariant}`} tag="div">
        {paragraph}
      </_Builtin.Block>
    </_Component>
  );
}
