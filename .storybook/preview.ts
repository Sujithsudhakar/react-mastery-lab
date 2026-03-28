import type { Preview } from '@storybook/react';
import '../src/index.scss';

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'slate',
      values: [
        {
          name: 'slate',
          value: '#020617',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
