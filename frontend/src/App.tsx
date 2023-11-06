import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './config/routes';

import { GlobalStyles } from './styles';
import { ThemeContextProvider } from './contexts/theme';

function App() {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <GlobalStyles />

        <AppRoutes />
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App;
