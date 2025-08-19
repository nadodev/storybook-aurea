import { Alert } from '.';
import type { Meta, StoryObj } from '@storybook/react';

const iconMap = {
  none: null,
  info: <svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="10" stroke="#1E4679" strokeWidth="2"/><text x="12" y="16" textAnchor="middle" fontSize="12" fill="#1E4679">i</text></svg>,
  alert: <svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="10" stroke="#B8943B" strokeWidth="2"/><text x="12" y="16" textAnchor="middle" fontSize="12" fill="#B8943B">i</text></svg>,
  success: <svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="10" stroke="#4CAF50" strokeWidth="2"/><text x="12" y="16" textAnchor="middle" fontSize="12" fill="#4CAF50">✓</text></svg>,
  error: <svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="10" stroke="#954040" strokeWidth="2"/><text x="12" y="16" textAnchor="middle" fontSize="12" fill="#954040">x</text></svg>,
};

type AlertProps = React.ComponentProps<typeof Alert> & {
  icon?: keyof typeof iconMap;
  title?: string;
  text?: string;
};

const meta: Meta<AlertProps> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: ['none', 'info', 'alert','success', 'error'],
      description: 'Ícone opcional exibido à esquerda do texto',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'none' },
      },
    },
    variant: {
      name: 'Variações',
      options: ['info', 'alert', 'success', 'error'],
      control: { type: 'select' },
    },
  },
  decorators: [
    Story => (
      <div className='max-w-screen-lg mx-auto p-12'>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<AlertProps>;

const render = ({ icon = 'none', children, ...args }: AlertProps) => (
  <Alert {...args}>
      {icon !== 'none' && iconMap[icon as keyof typeof iconMap]}{' '}
      <span>{children}</span>
  </Alert>
);

export const AlertLarge: Story = {
  args: {
    title: 'Título do alerta',
    text: 'É uma mensagem visual usada para',
    icon: 'info',
  },
  render: ({ icon, title, text, ...args }: AlertProps) => (
      <Alert {...args}
        icon={icon}
        title={title}
        text={text}
      />
  ),
};
