import React from "react";
import Box from "./Box";

function Button({ onClick, ...props}: { onClick: () => void }, ref: any) {
  return (
    <Box 
      as="button" 
      type="button" 
      onClick={onClick}  
      ref={ref}
      background="transparent"
      {...props} 
    />
  );
};

Button.displayName = 'Button';

export default React.forwardRef(Button);