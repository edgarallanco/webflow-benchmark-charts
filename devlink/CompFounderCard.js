"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { CompLabel } from "./CompLabel";
import { UtilitySpacing } from "./UtilitySpacing";
import { UtilityDivider } from "./UtilityDivider";

export function CompFounderCard({
  as: _Component = _Builtin.Link,
  contentCardCompanyName = "DocuSign",
  contentCardFounder = "Tom Gonser",
  contentCardText = "“Lorem ipsum dolor sit amet consectetur. Morbi sagittis mi nulla nulla ac. Ac nibh eu pellentesque turpis. Netus iaculis risus vivamus duis et a malesuada. Semper felis morbi dolor morbi.”",

  contentCardLink = {
    href: "#",
  },

  contentCardFounder2Visibility = false,
  contentCardFounder2 = "Dharmesh Shah",
}) {
  return (
    <_Component
      className="founder-card-wrap"
      id="w-node-f12a3136-fa13-6ae1-f1ca-03c0cfdaa0f0-cfdaa0f0"
      button={false}
      block="inline"
      options={contentCardLink}
    >
      <_Builtin.Block className="founder-card-top" tag="div">
        <_Builtin.Block className="founder-card-company" tag="div">
          {contentCardCompanyName}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="founder-card-bottom" tag="div">
        <CompLabel text="Founder" />
        <UtilitySpacing variant="sp-xxs" />
        <_Builtin.Heading className="heading-xxs" tag="h1">
          {contentCardFounder}
        </_Builtin.Heading>
        {contentCardFounder2Visibility ? (
          <_Builtin.Heading className="heading-xxs" tag="h1">
            {contentCardFounder2}
          </_Builtin.Heading>
        ) : null}
        <UtilitySpacing variant="sp-xs" />
        <_Builtin.Paragraph className="text-s">
          {contentCardText}
        </_Builtin.Paragraph>
        <UtilitySpacing variant="sp-xs" />
        <_Builtin.Block className="founder-card-link-wrap" tag="div">
          <UtilityDivider variant="Dust" />
          <UtilitySpacing variant="sp-s" />
          <_Builtin.Block className="founder-card-link-block" tag="div">
            <_Builtin.Block
              className="text-s text-family-saans text-weight-bold"
              tag="div"
            >
              {"Learn More"}
            </_Builtin.Block>
            <_Builtin.DOM
              className="link-arrow"
              tag="svg"
              slot=""
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox="0 0 32 32"
              fill="none"
            >
              <_Builtin.DOM
                tag="path"
                slot=""
                d="M23.3203 16.0058L2.95895 16.0059"
                stroke="currentColor"
                stroke-width="2.625"
                stroke-linecap="round"
                stroke-dasharray="0.03 4.95"
              />
              <_Builtin.DOM
                tag="path"
                slot=""
                d="M16 2L30 16L16 30"
                stroke="currentColor"
                stroke-width="2.625"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="0.03 4.95"
              />
            </_Builtin.DOM>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
