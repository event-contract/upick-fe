import router from "next/router";
import { colors } from "~/src/configs/colors";
import Button from "../../core/Button";

export default function RouterButton({
  name,
  href,
  ...props
}) {
  return (
    <Button 
      onClick={() => router.push(href)}
      fontWeight="400"
      fontSize="20px"
      lineHeight="1.2"
      color={colors.black}
      padding="0.5rem 1.875rem"
      {...props}
    >
      {name}
    </Button>
  );
};