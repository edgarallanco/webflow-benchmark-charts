"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function CompVideo({
  as: _Component = _Builtin.Block,
  videoPoster = "https://cdn.prod.website-files.com/692f28f1d17b8ec4f8005e36/69523bc4f24b8683ec1f2180_image-4_3.png",
  videoPosterImage = "https://cdn.prod.website-files.com/692f28f1d17b8ec4f8005e36/695d0994a237480e9fb9cf2c_Frame%202147231163.png",
  videoSourceLink = "https://videos.pexels.com/video-files/16296842/16296842-uhd_2560_1440_24fps.mp4",
}) {
  return (
    <_Component
      className="video_component"
      tag="div"
      data-component="html-video"
    >
      <_Builtin.Block className="video_overlay" tag="div">
        <_Builtin.DOM
          className="button is-play"
          tag="button"
          slot=""
          data-element="play-button"
        >
          <_Builtin.Block className="text-size-medium" tag="div">
            {"Play video"}
          </_Builtin.Block>
        </_Builtin.DOM>
        <_Builtin.Block className="gradient-overlay" tag="div" />
        <_Builtin.Image
          className="video_image-overlay"
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={videoPosterImage}
        />
      </_Builtin.Block>
      <_Builtin.DOM
        className="video"
        tag="video"
        slot=""
        loop=""
        playsinline="true"
        _class="video"
        preload="metadata"
      >
        <_Builtin.DOM
          className="source"
          tag="source"
          slot=""
          src={videoSourceLink}
          type="video/mp4"
        />
      </_Builtin.DOM>
      <_Builtin.HtmlEmbed
        className="video_code"
        value="%3Cscript%3E%0Afunction%20initHtmlVideo()%20%7B%0A%20%20const%20components%20%3D%20document.querySelectorAll('%5Bdata-component%3D%22html-video%22%5D')%3B%0A%20%20if%20(!components.length)%20return%3B%0A%0A%20%20components.forEach((component)%20%3D%3E%20%7B%0A%20%20%20%20const%20video%20%3D%20component.querySelector('video')%3B%0A%20%20%20%20const%20overlay%20%3D%20component.querySelector('.video_overlay')%3B%0A%20%20%20%20%0A%20%20%20%20%2F%2F%20Target%20the%20button%20by%20data-element%20instead%20of%20class%0A%20%20%20%20const%20playButton%20%3D%20component.querySelector('%5Bdata-element%3D%22play-button%22%5D')%3B%0A%0A%20%20%20%20%2F%2F%201%EF%B8%8F%E2%83%A3%20Show%20overlay%20and%20set%20poster%20dynamically%20from%20the%20image%20inside%20the%20video%0A%20%20%20%20const%20posterImg%20%3D%20video.querySelector('.video-poster-img')%3B%0A%20%20%20%20if%20(posterImg)%20%7B%0A%20%20%20%20%20%20const%20posterUrl%20%3D%20posterImg.src%3B%0A%0A%20%20%20%20%20%20%2F%2F%20Set%20video%20poster%0A%20%20%20%20%20%20video.setAttribute('poster'%2C%20posterUrl)%3B%0A%0A%20%20%20%20%20%20%2F%2F%20Set%20overlay%20background%0A%20%20%20%20%20%20if%20(overlay)%20%7B%0A%20%20%20%20%20%20%20%20overlay.style.display%20%3D%20'flex'%3B%20%2F%2F%20show%20overlay%0A%20%20%20%20%20%20%20%20overlay.style.backgroundImage%20%3D%20%60url(%24%7BposterUrl%7D)%60%3B%0A%20%20%20%20%20%20%20%20overlay.style.backgroundSize%20%3D%20'cover'%3B%0A%20%20%20%20%20%20%20%20overlay.style.backgroundPosition%20%3D%20'center'%3B%0A%20%20%20%20%20%20%20%20overlay.style.cursor%20%3D%20'pointer'%3B%0A%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%2F%2F%20Optionally%20remove%20the%20img%20from%20the%20DOM%0A%20%20%20%20%20%20posterImg.remove()%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%2F%2F%20Fallback%3A%20show%20overlay%20anyway%0A%20%20%20%20%20%20if%20(overlay)%20overlay.style.display%20%3D%20'flex'%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20%2F%2F%202%EF%B8%8F%E2%83%A3%20Play%20button%20click%0A%20%20%20%20if%20(playButton)%20%7B%0A%20%20%20%20%20%20playButton.addEventListener('click'%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20video.controls%20%3D%20true%3B%0A%20%20%20%20%20%20%20%20video.play()%3B%0A%20%20%20%20%20%20%20%20if%20(overlay)%20overlay.style.display%20%3D%20'none'%3B%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%7D%0A%0A%2F%2F%20Initialize%0AinitHtmlVideo()%3B%0A%3C%2Fscript%3E"
      />
    </_Component>
  );
}
