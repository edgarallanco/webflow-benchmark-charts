"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { CompVisual } from "./CompVisual";
import { UtilitySpacing } from "./UtilitySpacing";
import { CompButton } from "./CompButton";
import { UtilityLinkCover } from "./UtilityLinkCover";

export function CompNewsCardStyle2({
  as: _Component = _Builtin.Block,
  image = "https://cdn.prod.website-files.com/692f28f1d17b8ec4f8005e36/6936f76c99dad40086e819f0_image.jpg",
  name = "Eric Anderson",
  title = "Partner",

  linkedinLink = {
    href: "#",
  },

  profileLink = {
    href: "#",
  },

  buttonIconVisibility = true,
  buttonText = "Linkedin",
}) {
  return (
    <_Component
      className="news-card-style2"
      id="w-node-_1b879ab4-571d-b475-4eb9-235e7150c2a4-7150c2a4"
      tag="div"
    >
      <_Builtin.Block className="news-card-top" tag="div">
        <_Builtin.Block className="news-card-visual-wrap" tag="div">
          <CompVisual image={image} objectFit="cover" />
        </_Builtin.Block>
        <UtilitySpacing variant="sp-xs" />
      </_Builtin.Block>
      <_Builtin.Block className="news-card-bottom" tag="div">
        <_Builtin.Block
          className="text-m text-family-saans text-weight-bold"
          tag="div"
        >
          {name}
        </_Builtin.Block>
        <_Builtin.Block
          className="text-m text-family-saans text-weight-bold text-color-sand"
          tag="div"
        >
          {title}
        </_Builtin.Block>
        <UtilitySpacing variant="sp-xxs" />
        <CompButton
          buttonLink={linkedinLink}
          buttonText={buttonText}
          buttonIconVisibility={buttonIconVisibility}
        />
      </_Builtin.Block>
      <UtilityLinkCover link={profileLink} />
    </_Component>
  );
}
