"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { CompLabel } from "./CompLabel";
import { UtilitySpacing } from "./UtilitySpacing";
import { CompButton } from "./CompButton";

export function CompPressCard({
  as: _Component = _Builtin.Block,
  cardColor = "bg-pearl",
  contentEyebrowText = "Orrick Global",
  contentTitle = "Announcing our investment in Motion",
  linkButtonText = "Read Article",
  contentDateVisibility = true,

  linkButtonLink = {
    href: "#",
  },

  contentDate = "October 7, 2025",
  linkButtonVariant = "bg-pearl",
  contentSubtextVisibility = false,
  contentSubtextText = "Lorem ipsum dolor sit amet consectetur. Lectus sagittis in tortor justo rhoncus venenatis hac. Nunc malesuada...",
  linkButtonIconVisibility = true,
  linkPodcastButtonVisibility = false,
  linkArticleButtonVisibility = false,
}) {
  const _styleVariantMap = {
    "bg-pearl": "",
    "bg-bone": "w-variant-5ba45359-1201-e23f-e662-330d60569d94",
    "bg-white": "w-variant-ea9c55ef-834d-915d-e5b7-d1fb57343381",
    "bg-green": "w-variant-2eccd689-5064-0014-59f9-c963c5dbbb48",
  };

  const _activeStyleVariant = _styleVariantMap[cardColor];

  return (
    <_Component
      className={`press-collection-item ${_activeStyleVariant}`}
      id="w-node-_8239acea-7c9a-fb3b-51be-e142da2697c4-da2697c4"
      tag="div"
    >
      <_Builtin.Block
        className={`press-card-top ${_activeStyleVariant}`}
        tag="div"
      >
        <CompLabel text={contentEyebrowText} variant="Sml-green" />
        <UtilitySpacing variant="sp-xxs" />
        <_Builtin.Block
          className={`text-l text-family-saans text-weight-bold text-color-black ${_activeStyleVariant}`}
          tag="div"
        >
          {contentTitle}
        </_Builtin.Block>
        <UtilitySpacing variant="sp-xxs" />
        {contentDateVisibility ? (
          <_Builtin.Block
            className={`text-xxs text-family-saans ${_activeStyleVariant}`}
            tag="div"
          >
            {contentDate}
          </_Builtin.Block>
        ) : null}
        {contentSubtextVisibility ? (
          <_Builtin.Block className={`text-s ${_activeStyleVariant}`} tag="div">
            {contentSubtextText}
          </_Builtin.Block>
        ) : null}
        <UtilitySpacing variant="sp-xs" />
      </_Builtin.Block>
      <CompButton
        buttonText={linkButtonText}
        buttonLink={linkButtonLink}
        buttonVariant={linkButtonVariant}
        buttonIconVisibility={linkButtonIconVisibility}
        buttonElementVisibility={linkArticleButtonVisibility}
      />
    </_Component>
  );
}
