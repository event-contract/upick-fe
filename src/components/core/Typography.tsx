import React from "react";
import Box from "./Box";

function Typography(props, ref) {
  return <Box as="p" {...props} ref={ref} />;
};

Typography.displayName = 'Typography';

export default React.forwardRef(Typography);
