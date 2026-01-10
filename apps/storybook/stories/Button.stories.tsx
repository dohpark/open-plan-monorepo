import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@repo/ui/button';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Button label',
    },
    loading: {
      control: 'boolean',
      description: 'Shows loading spinner and disables button',
    },
    className: {
      control: false,
      description:
        'Optional. Use for layout/spacing only (e.g., `w-full`, `mt-4`). Avoid overriding core styles like `bg-*`, `text-*`, `border-*`, `shadow-*`.',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '다음',
  },
  parameters: {
    docs: {
      description: {
        story: [
          '#### Default State',
          '- **Container**',
          '  - Border radius: 12px',
          '  - Padding: 12px',
          '  - Background: #111',
          '- **Text**',
          '  - Font: Pretendard, Semibold',
          '  - Size: 16px (text-base)',
          '  - Line height: 148%',
          '  - Letter spacing: -2%',
          '  - Color: #fff',
          '',
          '#### Hover State',
          '- **Container**',
          '  - Background: #111 at 80% opacity',
          '- **Text**',
          '  - Same as Default',
          '',
          '#### Pressed State (Active)',
          '- **Container**',
          '  - Background: #111 at 80% opacity',
          '- **Text**',
          '  - Same as Default',
          '',
          '#### Notes',
          '- Hover and active states share the same visual treatment.',
          '- Background color transitions smoothly (200ms) if `transition-colors duration-200` is enabled.',
        ].join('\n'),
      },
    },
  },
};

export const Loading: Story = {
  args: {
    children: '다음',
    loading: true,
  },
  parameters: {
    docs: {
      description: {
        story: [
          '#### Loading State',
          '- **Container**',
          '  - Same as Default',
          '  - Cursor: not-allowed',
          '  - Opacity: 70%',
          '- **Content**',
          '  - Shows spinning loader instead of text',
          '  - Spinner: White circular spinner with 20px size',
          '  - Animation: Continuous spin using Tailwind `animate-spin`',
          '',
          '#### Behavior',
          '- Button is automatically disabled when `loading={true}`',
          '- `aria-busy` attribute is set to `true` for accessibility',
          '- Prevents multiple clicks during async operations',
        ].join('\n'),
      },
    },
  },
};
