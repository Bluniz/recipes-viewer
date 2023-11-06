import NotFoundIMG from '../../assets/page-not-found.svg';
import * as S from './styled';

export const NotFoundPage = () => {
  return (
    <S.Container>
      <img src={NotFoundIMG} alt='not-found' />
      <h1>Page not found.</h1>
    </S.Container>
  );
};
