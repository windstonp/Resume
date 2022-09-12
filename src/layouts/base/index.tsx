import { ReactNode } from 'react';
import { Container } from 'components/Container';
import { Menu } from 'components/Menu';
import { Footer } from 'components/Footer';
import { ContainerBase, ContentBase } from './style';

type BaseProps = {
  children: ReactNode;
};

export function Base({ children }: BaseProps) {
  return (
    <ContainerBase>
      <Container>
        <Menu />
        <ContentBase>{children}</ContentBase>
        <Footer />
      </Container>
    </ContainerBase>
  );
}