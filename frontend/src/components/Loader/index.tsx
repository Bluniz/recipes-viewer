import { HashLoader } from 'react-spinners';
import { themes, ThemeProp } from '../../styles/themes';
import { useTheme } from '../../hooks';

export const Loader = () => {
  const { theme } = useTheme();

  return (
    <HashLoader color={themes[(theme as ThemeProp) || 'dark'].colors.primary} />
  );
};
