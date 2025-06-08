/* eslint-disable  @typescript-eslint/no-explicit-any */

import React from "react";
import NextImage from "next/image";
import config from "@/../next.config";

export default function Image(props:any) {
  return <NextImage {...props} src={config.basePath + props.src}/>
}