"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function CompTestimonialCard({
  as: _Component = _Builtin.Block,
  variant = "Blue",
  mainText = "“Lorem ipsum dolor sit amet consectetur. Dis eget sed dignissim volutpat sit pulvinar etiam luctus lectus. Cursus diam bibendum vulputate fames eu cursus sed cras consequat. Consectetur a risus purus eget.”",
  logo = "https://cdn.prod.website-files.com/692f28f1d17b8ec4f8005e36/6950f9fbcec239a8e0d0a3db_logo%20(1).svg",
  authorName = "Christine Yen",
  authorRole = "Co-Founder & CEO",
}) {
  const _styleVariantMap = {
    Blue: "",
    Soil: "w-variant-8c7a709e-9e3a-1295-846c-a59c27049188",
    Green: "w-variant-31fb2786-1e7e-8114-df09-cb9135cd618a",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={`testimonials_component ${_activeStyleVariant}`}
      tag="div"
    >
      <_Builtin.Block
        className={`heading-xs text-weight-normal text-family-serif ${_activeStyleVariant}`}
        tag="div"
      >
        {mainText}
      </_Builtin.Block>
      <_Builtin.Block
        className={`testimonials_component-bottom ${_activeStyleVariant}`}
        tag="div"
      >
        <_Builtin.Image
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={logo}
        />
        <_Builtin.Block
          className={`testimonials_bottom-info ${_activeStyleVariant}`}
          tag="div"
        >
          <_Builtin.Block
            className={`text-m text-family-saans text-weight-bold text-color-pearl ${_activeStyleVariant}`}
            tag="div"
          >
            {authorName}
          </_Builtin.Block>
          <_Builtin.Block
            className={`text-m text-family-saans text-weight-bold text-color-dust ${_activeStyleVariant}`}
            tag="div"
          >
            {authorRole}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
