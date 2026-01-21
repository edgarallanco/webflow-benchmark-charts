"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function UtilityLinkCover({
  as: _Component = _Builtin.Block,
  linkVisibility = true,
  buttonVisibility = false,
  buttonLinkText = "Button",

  link = {
    href: "#",
  },
}) {
  return (
    <_Component
      className="u-clickeable-element"
      tag="div"
      fs-list-element="item-link"
    >
      {linkVisibility ? (
        <_Builtin.Link
          className="u-link-cover"
          button={false}
          block="inline"
          options={link}
        >
          <_Builtin.DOM className="u-sr-only" tag="span" slot="">
            {buttonLinkText}
          </_Builtin.DOM>
        </_Builtin.Link>
      ) : null}
      {buttonVisibility ? (
        <_Builtin.DOM className="u-button-element" tag="button" slot="">
          <_Builtin.DOM className="u-sr-only" tag="span" slot="">
            {buttonLinkText}
          </_Builtin.DOM>
        </_Builtin.DOM>
      ) : null}
    </_Component>
  );
}
