import Image from "next/image";
import { colors } from "~/src/configs/colors";
import Box from "../core/Box";
import Img from "../core/Img";
import Text from "../core/Text";

type Props = {
  title: string,
  content: string,
  image: string,
  colorSet?: string,
};

const getColors = (type: string) => {
  switch (type) {
    case 'main':
      return {
        background: colors.subColor,
        text: colors.white
      };
    default:
      return {
        background: colors.white,
        text: colors.gray.text
      };
  }
};

export default function InformationCard1({
  title,
  content,
  image,
  colorSet='normal'
}: Props) {
  return (
    <Box
      margin="3rem 1.5rem 0 1.5rem"
      position="relative"
      display="flex"
      flex="0.5"
      flexDirection="column"
      padding="min(max(5vw, 20px), 40px)"
      minWidth="300px"
      maxWidth="640px"
      minHeight="300px"
      maxHeight="640px"
      boxSizing="border-box"
      backgroundColor={getColors(colorSet).background}
      boxShadow="-11px 20px 40px 5px rgba(0, 0, 0, 0.11)"
      borderRadius="22px"
    >
      <Text
        fontWeight="700"
        fontSize="min(8.6vw, 43px)"
        lineHeight="1.45"
        color={colors.gray.text2}
        dangerouslySetInnerHTML={{
          __html: title.replace(/\n/g, '<br/>')
        }}
      />
      <Text
        fontWeight="400"
        fontSize="min(4.6vw, 23px)"
        lineHeight="1.45"
        color={getColors(colorSet).text}
        dangerouslySetInnerHTML={{
          __html: content.replace(/\n/g, '<br/>')
        }}
      />
      <Box marginLeft="auto" marginTop="auto" paddingTop="1.5rem" width="50%" height="50%">
        <Img
          alt="card image"
          src={image}
          layout="responsive"
          borderRadius="999px"
          background={colors.gray.bg}
        />
      </Box>
    </Box>
  );
};
