import React from "react";
import Box from "./Box";

function Text(props, ref) {
  return <Box as="p" {...props} ref={ref} />;
};

Text.displayName = 'Text';

export default React.forwardRef(Text);
