import React from 'react';
import { theme as chakraTheme } from '@chakra-ui/react';

const theme = {
  ...chakraTheme,
  fonts: {
    ...chakraTheme.fonts,
    body:
      "'Avenir Next', Avenir, 'Helvetica Neue', Helvetica, Arial, sans-serif;",
    heading:
      "'Avenir Next', Avenir, 'Helvetica Neue', Helvetica, Arial, sans-serif;"
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700
  },
  icons: {
    ...chakraTheme.icons,
    mail: {
      path: (
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </g>
      )
    },
  }
};

export default theme;