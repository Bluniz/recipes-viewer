import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { RecipeDetails } from '../pages/RecipeDetails';
import { Layout } from '../components/Layout';
import { FavoriteRecipes } from '../pages/FavoriteRecipes';
import { NotFoundPage } from '../pages/NotFound';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/recipes/:id' element={<RecipeDetails />} />
        <Route path='recipes/favorites' element={<FavoriteRecipes />} />
      </Route>

      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};
