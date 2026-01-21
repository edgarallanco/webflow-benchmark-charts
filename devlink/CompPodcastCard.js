"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { CompVisual } from "./CompVisual";
import { CompLabel } from "./CompLabel";
import { UtilitySpacing } from "./UtilitySpacing";
import { CompButton } from "./CompButton";

export function CompPodcastCard({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className="podcast-card"
      id="w-node-_3f378146-1486-332e-4721-a4b1563c0225-563c0225"
      tag="div"
    >
      <_Builtin.Block className="podcast-card_visual-wrap" tag="div">
        <CompVisual
          image="https://cdn.prod.website-files.com/692f28f1d17b8ec4f8005e36/6936f6e902aac526419281df_style3_podcast.jpg"
          objectFit="fill"
          ratio="4:3"
        />
      </_Builtin.Block>
      <_Builtin.Block
        className="podcast-card-content-wrap"
        id="w-node-_22db977c-7201-8112-9197-98e13fa96404-563c0225"
        tag="div"
      >
        <_Builtin.Block className="podcast-card-top" tag="div">
          <CompLabel text="SiliconANGLE" variant="Sml-green" />
          <_Builtin.Block className="podcast-card-style1-title" tag="div">
            {"Contributor Podcast"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="podcast-card-bottom" tag="div">
          <_Builtin.Paragraph className="text-s">
            {
              "Lorem ipsum dolor sit amet consectetur. Mattis nulla mi purus lorem tortor. Arcu nibh nunc in id orci. Tincidunt volutpat vel morbi tellus odio egestas tortor id. Neque et et sit proin. Metus eget amet pretium auctor in tincidunt."
            }
          </_Builtin.Paragraph>
          <UtilitySpacing variant="sp-xs" />
          <CompButton buttonText="Learn More" />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
