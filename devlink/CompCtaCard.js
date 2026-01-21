"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { UtilitySpacing } from "./UtilitySpacing";
import { CompButton } from "./CompButton";

export function CompCtaCard({
  as: _Component = _Builtin.Block,
  contentBigTitleVisibility = true,
  contentTitle = "The Latest on Scale",
  contentSmallTitleVisibility = false,
  contentParagraphText = (
    <>
      {"Lorem ipsum dolor sit amet consectetur."}
      <br />
      {"Facilisis eget nunc elit elit eu in."}
    </>
  ),
  linkLinkVisibility = true,
  linkButtonVisibility = true,
  linkButtonText = "View All Press",

  linkButtonLink = {
    href: "#",
  },
}) {
  return (
    <_Component className="cta_block" tag="div">
      <_Builtin.Block className="cta_block-content" tag="div">
        {contentBigTitleVisibility ? (
          <_Builtin.Block className="cta_big-title" tag="div">
            <_Builtin.Heading className="heading-s" tag="h2">
              {contentTitle}
            </_Builtin.Heading>
            <UtilitySpacing variant="sp-xxl" />
          </_Builtin.Block>
        ) : null}
        {contentSmallTitleVisibility ? (
          <_Builtin.Block className="cta_small-title" tag="div">
            <_Builtin.Heading className="body-xl" tag="h2">
              {contentTitle}
            </_Builtin.Heading>
            <UtilitySpacing variant="sp-s" />
          </_Builtin.Block>
        ) : null}
        {contentBigTitleVisibility ? (
          <_Builtin.Block className="text-l" tag="div">
            {contentParagraphText}
          </_Builtin.Block>
        ) : null}
        {contentSmallTitleVisibility ? (
          <_Builtin.Block className="text-m" tag="div">
            {contentParagraphText}
          </_Builtin.Block>
        ) : null}
        <UtilitySpacing variant="sp-s" />
        <CompButton
          buttonText={linkButtonText}
          buttonLink={linkButtonLink}
          buttonElementVisibility={linkButtonVisibility}
          buttonVariant="Secondary-lg"
          linkVisibility={false}
        />
      </_Builtin.Block>
      <_Builtin.Block className="cta_block-backrground_image" tag="div">
        <_Builtin.Image
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://cdn.prod.website-files.com/692f28f1d17b8ec4f8005e36/695b543aa2559ba4e889258a_bkg.png"
        />
      </_Builtin.Block>
    </_Component>
  );
}
