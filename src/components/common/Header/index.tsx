import { colors } from "~/src/configs/colors";
import Box from "../../core/Box";
import RouterButton from "./RouterButton";

export default function Header() {
  return (
    <Box
      as="nav"
      padding="2rem 4rem"
      position="relative"
      display="flex"
      background={colors.white}
      width="100%"
      boxSizing="border-box"
      boxShadow="0px 1px 12px rgba(0, 0, 0, 0.16)"
    >
      <RouterButton name="HOME" href="/" />
      <RouterButton name="ABOUT" href="/about" />
      <RouterButton name="로그인" href="/login" marginLeft="auto" fontWeight="600" />
      <RouterButton name="회원가입" href="/signup" fontWeight="600" />
    </Box>
  );
};