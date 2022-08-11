import { colors } from "~/src/configs/colors";
import Box from "../../core/Box";
import Img from "../../core/Img";

type Props = {
  direction: string;
  onClick: () => void;
}

export default function JumpButton({
  direction,
  onClick
}: Props) {
  return (
    <Box
      onClick={onClick}
      position="absolute"
      display="flex"
      top="50%"
      transform="translateY(-50%)"
      width="44px"
      height="44px"
      background={colors.skyBlue}
      borderRadius="99px"
      {...direction === 'left' ? {
        left: "3rem"
      } : {
        right: "3rem"
      }}
    >
      <Img
        margin="auto"
        alt="chevron"
        src="/img/chevron.svg"
        width="21px"
        height="21px"
        {...direction === 'left' ? {} : {transform: "rotate(180deg)"}}
      />
    </Box>
  );
};