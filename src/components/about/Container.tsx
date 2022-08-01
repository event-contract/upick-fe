import React from "react";
import { colors } from "~/src/configs/colors";
import Box from "../core/Box";
import Text from "../core/Text";

type Props = {
  title: string;
  children?: any;
  titleAlign?: string;
  colorSet?: string;
};

const getColors = (type: string) => {
  switch (type) {
    case 'main':
      return {
        background: colors.main,
        text: colors.white
      };
    case 'white':
      return {
        background: colors.white,
        text: colors.black
      };
    default:
      return {
        background: colors.gray.bg,
        text: colors.black
      };
  }
};

export default function Container({ 
  title,
  children,
  titleAlign='left',
  colorSet='normal'
}: Props) {
  return (
    <Box
      padding="8.75rem"
      width="100%"
      background={getColors(colorSet).background}
      color={getColors(colorSet).text}
      boxSizing="border-box"
    >
      <Text 
        as="h2" 
        margin="0 auto"
        maxWidth="1200px"
        fontSize="46px" 
        lineHeight="1.7" 
        textAlign={titleAlign}
        dangerouslySetInnerHTML={{
          __html: title.replace(/\n/g, '<br/>')
        }}
      />
      {children}
    </Box>
  )
};
