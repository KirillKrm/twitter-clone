import * as React from 'react';
// import styled from 'styled-components/macro';

// export const A = styled.a`
//   color: ${p => p.theme.primary};
//   text-decoration: none;

//   &:hover {
//     text-decoration: underline;
//     opacity: 0.8;
//   }

//   &:active {
//     opacity: 0.4;
//   }
// `;

export const A = (...allProps: any) => {
  const { props } = allProps.props;
  const style: any = `
    color: ${props.theme.primary};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      opacity: 0.8;
    }

    &:active {
      opacity: 0.4;
    }
  `;
  return (
    <a href="/#" style={style}>
      {...allProps}
    </a>
  );
};
