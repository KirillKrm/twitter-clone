import * as React from 'react';
import { useSelector } from 'react-redux';
import { useThemeSlice } from './slice';
import { selectTheme } from './slice/selectors';

// TODO appropriate styled-components/styled-components/tree/main/packages/styled-components
export const ThemeProvider = (props: { children: React.ReactChild }) => {
  useThemeSlice();

  //const theme = useSelector(selectTheme);
  return <ThemeProvider>{React.Children.only(props.children)}</ThemeProvider>;
};
