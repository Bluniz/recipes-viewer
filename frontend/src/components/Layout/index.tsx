import { Outlet } from 'react-router-dom';
import * as S from './styled';
import { Header } from '../Header';
import { Content } from '../Content';

export const Layout = () => {
  return (
    <S.LayoutContainer>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </S.LayoutContainer>
  );
};
