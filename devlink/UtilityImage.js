"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function UtilityImage({
  as: _Component = _Builtin.Image,
  image = "https://cdn.prod.website-files.com/692f28f1d17b8ec4f8005e36/692f28f4d17b8ec4f8005f91_3200eb4bce6578d74c6505b64ad2b5bf_placeholder.png",
}) {
  return (
    <_Component
      className="image"
      loading="lazy"
      width="Auto"
      height="Auto"
      alt=""
      src={image}
    />
  );
}
