import { colors } from "~/src/configs/colors";
import Box from "../core/Box";
import Img from "../core/Img";
import Text from "../core/Text";

export default function InformationCard2({
  image,
  title,
  content,
}: { image: string, title: string, content: string }) {
  return (
    <Box
      margin="0 1rem"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Img
        alt={title}
        src={image}
        background={colors.gray.bg}
        width="150px"
        height="150px"
        borderRadius="19px"
      />
      <Text
        marginTop="1.5rem"
        fontWeight="700"
        fontSize="min(5.8vw, 29px)"
        lineHeight="1.6"
        color={colors.gray.text3}
        textAlign="center"
        dangerouslySetInnerHTML={{
          __html: title.replace(/\n/g, '<br/>')
        }}
      />
      <Text
        marginTop="1rem"
        fontWeight="500"
        fontSize="min(4.8vw, 24px)"
        lineHeight="1.6"
        color={colors.gray.text3}
        textAlign="center"
        dangerouslySetInnerHTML={{
          __html: content.replace(/\n/g, '<br/>')
        }}
      />
    </Box>
  );
};
