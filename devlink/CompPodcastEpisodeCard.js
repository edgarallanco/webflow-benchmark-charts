"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { CompVisual } from "./CompVisual";
import { CompLabel } from "./CompLabel";
import { CompButton } from "./CompButton";

export function CompPodcastEpisodeCard({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="podcast_episode" tag="div">
      <_Builtin.Block className="row" tag="div">
        <_Builtin.Block className="column _2-col" tag="div">
          <CompVisual
            image="https://cdn.prod.website-files.com/692f28f1d17b8ec4f8005e36/6936f6e902aac526419281df_style3_podcast.jpg"
            objectFit="fill"
            ratio="4:3"
          />
        </_Builtin.Block>
        <_Builtin.Block className="column _8-col" tag="div">
          <_Builtin.Block className="podcast-episode_content" tag="div">
            <CompLabel variant="Sml-green" text="Episode 01" />
            <_Builtin.Block
              className="text-l text-family-saans text-weight-bold"
              tag="div"
            >
              {
                "Productivity platform startup Cortex raises $60M to strength platform"
              }
            </_Builtin.Block>
            <_Builtin.Block className="text-xxs text-family-saans" tag="div">
              {"September 4, 2025"}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="column _2-col align-stretch" tag="div">
          <_Builtin.Block className="podcast-episode_button-wrap" tag="div">
            <CompButton buttonIconVisibility={true} buttonText="Listen In" />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
