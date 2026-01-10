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
      description: 'The button content',
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
        story:
          '기본 상태\n- Container: corner radius 12px, padding 12px, fill #111\n- Text: Pretendard semibold 16px, line-height 148%, letter-spacing -2%, fill #fff',
      },
    },
  },
};

export const Hover: Story = {
  args: {
    children: '다음',
  },
  parameters: {
    docs: {
      description: {
        story: '호버 상태\n- Container: fill #111 80%\n- 나머지 스타일은 기본 상태와 동일',
      },
    },
  },
};

export const Pressed: Story = {
  args: {
    children: '다음',
  },
  parameters: {
    docs: {
      description: {
        story: '누름 상태 (active)\n- Container: fill #111 80%\n- 나머지 스타일은 기본 상태와 동일',
      },
    },
  },
};
