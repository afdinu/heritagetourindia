"use client";
import ImageView from "@/components/ImageView";
import VideoPopup from "@/components/VideoPopup";
import {
  animatedText,
  animation,
  useAnimationSwiper,
  useMouseCursor,
  useSmoothScrolling,
  useStickyHeader,
} from "@/utilities";
import React, { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";
import MouseCursor from "./MouseCursor";

const RoavioLayout = ({
  children,
  header,
  footer,
}: {
  children: React.ReactNode;
  header?: number;
  footer?: number;
}) => {
  useSmoothScrolling();
  useStickyHeader();
  useMouseCursor();
  animation();
  animatedText();
  useAnimationSwiper();
  return (
    <Fragment>
      <ImageView />
      <VideoPopup />
      <MouseCursor />
      <Header version={header} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          {children}
          <Footer version={footer} />
        </div>
      </div>
    </Fragment>
  );
};

export default RoavioLayout;
