import { Link, useLocation } from 'react-router-dom';
import { HeaderContainer, NavigationContainer } from './styled';
import { ToggleThemeButton } from '../ToggleThemeButton';

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <HeaderContainer>
      <Link to='/'>
        <h3>Recipe Viewer</h3>
      </Link>

      <ToggleThemeButton />

      <NavigationContainer>
        <Link
          to='/recipes/favorites'
          className={pathname === '/recipes/favorites' ? 'active' : ''}
        >
          Favorites
        </Link>
      </NavigationContainer>
    </HeaderContainer>
  );
};
