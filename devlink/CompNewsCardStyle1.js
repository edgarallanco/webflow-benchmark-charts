"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { CompVisual } from "./CompVisual";
import { UtilitySpacing } from "./UtilitySpacing";
import { CompLabel } from "./CompLabel";
import { CompButton } from "./CompButton";

export function CompNewsCardStyle1({
  as: _Component = _Builtin.Block,
  variant = "On-light",
  buttonVariant = "On-light",

  buttonLink = {
    href: "#",
  },

  buttonText = "Read More",
  buttonVisibility = false,
  visualThumbnailImage = "https://cdn.prod.website-files.com/692f28f1d17b8ec4f8005e36/6936f76cb7ac9d6260e2e096_image-wrap.jpg",
  contentLabelText = "AI Apps",
  contentTitleText = "Let Commodities Be Commodities",
  contentSubText = "How to build defensible companies in the face of LLM “startup killers”.",
  contentDateVisibility = false,
  contentDate = "This is some text inside of a div block.",
  visualIcon = "https://cdn.prod.website-files.com/692f28f1d17b8ec4f8005e36/6967e5a2ed48b1ad74b4f9c5_article.svg",
  visualIconVisibility = false,
  visualIconImage = "",
  advancedNestedListIdentifier,
}) {
  const _styleVariantMap = {
    "On-light": "",
    "On-dark": "w-variant-d59fbb71-c623-abea-53ce-74f6287077cb",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={`news-card-style1 ${_activeStyleVariant}`}
      id="w-node-_4ff673c6-717f-1ad6-1c99-249096c46802-96c46802"
      tag="div"
    >
      <_Builtin.Block
        className={`news-card-top ${_activeStyleVariant}`}
        tag="div"
      >
        <_Builtin.Block
          className={`news-card-visual-wrap ${_activeStyleVariant}`}
          tag="div"
        >
          <CompVisual image={visualThumbnailImage} borderRadius="br-m" />
          {visualIconVisibility ? (
            <_Builtin.Block
              className={`icon-wrap ${_activeStyleVariant}`}
              tag="div"
            >
              <_Builtin.Image
                className={`news-icon ${_activeStyleVariant}`}
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src={visualIconImage}
              />
            </_Builtin.Block>
          ) : null}
        </_Builtin.Block>
        <UtilitySpacing variant="sp-xs" />
      </_Builtin.Block>
      <_Builtin.Block
        className={`news-card-bottom ${_activeStyleVariant}`}
        tag="div"
      >
        <_Builtin.Block
          className={`news-card_info-wrap ${_activeStyleVariant}`}
          tag="div"
        >
          <_Builtin.Block
            className={`target-div ${_activeStyleVariant}`}
            tag="div"
            fs-list-nest={advancedNestedListIdentifier}
            fs-list-element="nest-target"
          >
            <CompLabel text={contentLabelText} variant="Sml-green" />
          </_Builtin.Block>
          <UtilitySpacing variant="sp-xxs" />
          <_Builtin.Block
            className={`text-m text-family-saans text-weight-bold ${_activeStyleVariant}`}
            tag="div"
          >
            {contentTitleText}
          </_Builtin.Block>
          {contentDateVisibility ? (
            <_Builtin.Block
              className={`date-wrap ${_activeStyleVariant}`}
              tag="div"
            >
              <UtilitySpacing variant="sp-xxs" />
              <_Builtin.Block
                className={`text-xxs ${_activeStyleVariant}`}
                tag="div"
              >
                {contentDate}
              </_Builtin.Block>
            </_Builtin.Block>
          ) : null}
          <UtilitySpacing variant="sp-xxs" />
          <_Builtin.Paragraph className={`text-s ${_activeStyleVariant}`}>
            {contentSubText}
          </_Builtin.Paragraph>
        </_Builtin.Block>
        <_Builtin.Block
          className={`news-card_button-wrap ${_activeStyleVariant}`}
          tag="div"
        >
          <UtilitySpacing variant="sp-xs" />
          <CompButton
            buttonText={buttonText}
            buttonVariant={buttonVariant}
            buttonLink={buttonLink}
            buttonIconVisibility={buttonVisibility}
          />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
