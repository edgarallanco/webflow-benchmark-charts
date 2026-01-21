"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { CompPaddingSectionY } from "./CompPaddingSectionY";
import { UtilityContainer } from "./UtilityContainer";

export function SectionBaseSection({
  as: _Component = _Builtin.Block,
  layoutPaddingTop = null,
  layoutPaddingBottom = null,
  layoutContainerSize = null,
}) {
  return (
    <_Component className="section" tag="section">
      <CompPaddingSectionY variant={layoutPaddingTop} />
      <UtilityContainer variant={layoutContainerSize} />
      <CompPaddingSectionY variant={layoutPaddingBottom} />
    </_Component>
  );
}
