import React, { forwardRef } from 'react';
import { css } from '@emotion/css';
import classifyCssProps from '~/src/utils/classifyCssProps';

interface propTypes {
  as: string,
  children: React.ReactNode,
  [key: string]: any
};

const Box = forwardRef(({
  as,
  children,
  ...props
}: propTypes, ref) => {
  const { cssProps, normalProps } = classifyCssProps(props);
  
  return React.createElement(
    as,
    {
      className: css(cssProps),
      ref,
      ...normalProps
    },
    children
  );
});

Box.defaultProps = {
  as: 'div'
};

export default Box;
