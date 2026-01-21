"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { CompVisual } from "./CompVisual";

export function CompPhotoCard({
  as: _Component = _Builtin.Block,
  overlayVisualLogoVisibility = true,
  overlayVisualLogo = "https://cdn.prod.website-files.com/692f28f1d17b8ec4f8005e36/6936e7e3a3083b1c63a25216_docusign.svg",
  overlayVisualImage = "https://cdn.prod.website-files.com/692f28f1d17b8ec4f8005e36/6936e5d9f01b609c8b0857df_back.jpg",
}) {
  return (
    <_Component
      className="photo-card-wrap"
      id="w-node-_42861c92-83d6-fbfb-477e-9e5d234b37c4-234b37c4"
      tag="div"
    >
      <CompVisual image={overlayVisualImage} objectFit="cover" />
      <_Builtin.Block className="photo-card-overlay" tag="div">
        {overlayVisualLogoVisibility ? (
          <_Builtin.Image
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src={overlayVisualLogo}
          />
        ) : null}
      </_Builtin.Block>
    </_Component>
  );
}
