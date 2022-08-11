import { colors } from "~/src/configs/colors";
import Box from "../../core/Box";
import Text from "../../core/Text";

export default function CarouselItem({ content, name }: { content: string; name: string; }) {
  return (
    <Box 
      paddingTop="8rem"
      display="flex"
      flexDirection="column"
      width="350px"
      height="450px"
      borderRadius="19px"
      boxSizing="border-box"
      background={colors.white}
      boxShadow="-15px 13px 28px rgba(0, 0, 0, 0.25)"
      userSelect="none"
    >
      <Text
        margin="0 3rem"
        fontSize="24px"
        lineHeight="1.6"
        color={colors.gray.text3}
        dangerouslySetInnerHTML={{
          __html: content.replace(/\n/g, '<br/>')
        }}
      />
      <Text
        marginTop="auto"
        marginLeft="auto"
        marginBottom="1rem"
        padding="1rem 1.5rem 0 1.5rem"
        fontSize="15px"
        lineHeight="1.6"
        color={colors.gray.text4}
        dangerouslySetInnerHTML={{
          __html: name.replace(/\n/g, '<br/>')
        }}
      />
    </Box>
  );
};