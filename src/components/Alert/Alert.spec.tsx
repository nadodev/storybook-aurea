import { render, screen } from '@testing-library/react';
import { Alert, AlertProps } from '.';

type Props = Partial<AlertProps>;

const makeAlert = (p: Props = {}) => {
  return (
    <Alert
      icon="info"
      text="Aqui vai a mensagem de alerta"
      title="Título do alerta"
      variant="info"
      {...p}
    />
  );
};

const renderAlert = (p?: Props) => {
  return render(makeAlert(p));
};

const alert = (p?: Props) => renderAlert(p).container;

describe('<Alert />', () => {
  describe('comportamento padrão', () => {
    test('renderiza com título e texto', async () => {
      const el = alert({ title: 'novo título', text: 'novo texto' });
      const title = screen.getByText('novo título');
      const text = screen.getByText('novo texto');
      expect(el).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(text).toBeInTheDocument();
    });
  });

  describe('comportamento de erro', () => {
    test('renderiza com título e texto de erro', async () => {
      const el = alert({ title: 'Erro', text: 'Ocorreu um erro', icon: 'error', variant: 'error' });
      const title = screen.getByText('Erro');
      const text = screen.getByText('Ocorreu um erro');
      const svgIcon = el.querySelector('svg');
      expect(svgIcon).toBeInTheDocument();
      expect(el).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(text).toBeInTheDocument();
      expect(el.firstChild).toHaveClass('bg-[#ECD7D5]', 'border-[#954040]', 'text-[#954040]');
    });
  });
});
