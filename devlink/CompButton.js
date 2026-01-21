"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { UtilityLinkCover } from "./UtilityLinkCover";

export function CompButton({
  as: _Component = _Builtin.Block,
  buttonVariant = "Primary-lg",
  linkVisibility = true,
  buttonElementVisibility = false,

  buttonLink = {
    href: "#",
  },

  buttonText = "Button",
  buttonIconVisibility = false,
}) {
  const _styleVariantMap = {
    "Primary-lg": "",
    "Secondary-lg": "w-variant-ce44a028-2c4f-6b4d-aab6-f65830dac80f",
    "Primary-sm": "w-variant-b75e25d2-f445-db14-e096-44a3ddffe3f7",
    "Secondary-sm": "w-variant-e6cdcfe6-0a2b-a50e-7358-e339b5743894",
    "Tertiary-lg": "w-variant-4184bfee-c0ef-2a25-40fb-9759da1149f6",
    "Tertiary-sm": "w-variant-0d51e5bb-000e-ec93-2733-6e74b85d2668",
  };

  const _activeStyleVariant = _styleVariantMap[buttonVariant];

  return (
    <_Component className={`button ${_activeStyleVariant}`} tag="div">
      <_Builtin.Block
        className={`button-content ${_activeStyleVariant}`}
        tag="div"
      >
        <_Builtin.Block tag="div">{buttonText}</_Builtin.Block>
        {buttonIconVisibility ? (
          <_Builtin.Block
            className={`button-icon ${_activeStyleVariant}`}
            tag="div"
          >
            <_Builtin.DOM
              className={`button-arrow ${_activeStyleVariant}`}
              tag="svg"
              slot=""
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox="0 0 8 8"
              fill="none"
            >
              <_Builtin.DOM
                tag="path"
                slot=""
                d="M6.47509 1.52539L1.52535 6.47514"
                stroke="currentColor"
                stroke-linecap="round"
              />
              <_Builtin.DOM
                tag="path"
                slot=""
                d="M1.5249 1.52539H6.47465V6.47514"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </_Builtin.DOM>
          </_Builtin.Block>
        ) : null}
      </_Builtin.Block>
      <UtilityLinkCover
        buttonLinkText={buttonText}
        linkVisibility={linkVisibility}
        buttonVisibility={buttonElementVisibility}
        link={buttonLink}
      />
    </_Component>
  );
}
