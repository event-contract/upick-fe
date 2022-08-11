import Image, { ImageProps } from "next/image";
import React from "react";
import Box from "./Box";

type Props = ImageProps & {
  alt: string;
  src: string;
  w: string;
  h: string;
} & any;

const Img = ({
  alt,
  src,
  layout="intrinsic",
  ...props
}: Props, ref: any) => (
  <Box position="relative" {...props} ref={ref}>
    <Image
      alt={alt}
      src={src}
      width="100%"
      height="100%"
      layout={layout}
    />
  </Box>
);

Img.displayName = 'Img';

export default React.forwardRef(Img);
